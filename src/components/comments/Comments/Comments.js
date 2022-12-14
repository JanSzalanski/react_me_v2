/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useReducer, useEffect, useState } from 'react';
import classes from '../Comments/Comments.module.css';
import CommentList from '../CommentList/CommentList';
import Filter from '../Filter/Filter';
import CommentForm from '../CommentForm/CommentForm';
import ZoneMiddle from '../../UI/Zones/ZoneMiddle';
import LoadingSpiner from '../../UI/LoadingSpiner/LoadingSpiner';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import ZoneBottom from '../../UI/Zones/ZoneBottom';
import DummyForm from '../DummyForm/DummyForm';
// import AuthContext from '../../../context/AuthContext';
import { UserAuth } from '../../../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import { query, collection, onSnapshot, deleteDoc, doc, where, orderBy } from 'firebase/firestore';
import { db } from '../../../Firebase';

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...currentHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return { ...currentHttpState, error: null };
    default:
      throw new Error('Ten blad nie powinnen sie zdarzyc: red def in http');
  }
};

const Comments = (props) => {
  const { user, loged } = UserAuth();
  const [httpState, dispachHttp] = useReducer(httpReducer, { loading: false, error: null });
  const [comments, setComments] = useState([]);
  const [editableComment, setEditableComment] = useState([]);
  const [editableCommentID, setEditableCommentID] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  //Read news from firebase...
  // console.log(commentArr);

  // READ nowa wersja odczytu komentarzy

  const filteredName = (data) => {
    console.log(data);
  };

  useEffect(() => {
    try {
      const q = query(collection(db, 'comments'), where('name', '==', 'jmsyou1'));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let newsArr = [];
        querySnapshot.forEach((doc) => {
          newsArr.push({ ...doc.data(), id: doc.id });
        });
        setComments(newsArr);
      });
      return () => unsub();
    } catch (error) {
      new Error('Nie pobrano komentarzy z bazy');
      // console.log('catch komentarz read' + error);
    }
  }, []);

  // Deleted dodawanie komentarza do bazy danycy

  const deleteComment = async (id) => {
    await deleteDoc(doc(db, 'comments', id));
    // console.log('skasowano komentarz o ID ' + id);
  };

  const editComment = (id) => {
    if (!isEdit) {
      const unsub = onSnapshot(doc(db, 'comments', id), (doc) => {
        setEditableComment(doc.data());
        setEditableCommentID(doc.id);
      });
      setIsEdit(true);
      return () => unsub();
    } else {
      alert('Już edytujesz komentarz');
    }
  };

  const endEditing = () => {
    deleteComment(editableCommentID);
    // console.log('end editing  ' + editableCommentID);
    setIsEdit(false);
    setEditableComment(null);
    setEditableCommentID('');
  };

  useEffect(() => {
    if (!loged) {
      setIsEdit(false);
      setEditableComment(null);
      setEditableCommentID('');
      // console.log('zerowanie eedycji po wylogowaniu');
    }
  }, [loged]);

  //połaczenie z firebase ustawienie metody przesyłu POST i przesłanie dodawanego komentarza jeszcze bez catch & err
  // const addCommentHandler = (comment) => {
  //   dispachHttp({ type: 'SEND' });
  //   fetch('https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
  //     method: 'POST',
  //     body: JSON.stringify(comment),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((response) => {
  //       dispachHttp({ type: 'RESPONSE' });
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       // setCommentArr((prevComments) => [...prevComments, { id: responseData.name, ...comment }]);
  //       dispach({ type: 'ADD', comment: { id: responseData.name, ...comment } });
  //     })
  //     .catch((error) => {
  //       dispachHttp({ type: 'ERROR', errorMessage: 'Błąd połączenia z bazą' });
  //     });
  // };

  const clearError = () => {
    dispachHttp({ type: 'CLEAR' });
  };

  return (
    <>
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <div className={classes.comments}>
        <Filter filter={filteredName} />
        <ZoneMiddle>
          <CommentList
            loading={httpState.loading}
            comments={comments}
            onRemoveItem={deleteComment}
            onEditItem={editComment}
          >
            {httpState.loading && <LoadingSpiner />}
          </CommentList>
        </ZoneMiddle>
        {user && (
          <>
            <Route exact path="/people">
              <Redirect to="/people/comments"></Redirect>
            </Route>

            <Route path="/people/comments">
              <CommentForm editData={editableComment} edit={isEdit} end={endEditing} />
            </Route>
          </>
        )}
        {!user && (
          <>
            <Route exact path="/people/comments">
              <Redirect to="/people"></Redirect>
            </Route>

            <ZoneBottom>
              <DummyForm />
              <div className={classes.disabledForm}>
                <div className={classes.titleWrap}>
                  <h3 className={classes.title}>
                    <b> ///// </b>Aby dodawać i edytować komentarze zaloguj się<b> ///// </b>
                  </h3>
                </div>
              </div>
            </ZoneBottom>
          </>
        )}
      </div>
    </>
  );
};

export default Comments;

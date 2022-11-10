/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useReducer, useEffect, useCallback } from 'react';
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

const commentReducer = (currentComment, action) => {
  switch (action.type) {
    case 'SET':
      return action.comments;
    case 'ADD':
      return [...currentComment, action.comment];
    case 'DELETE':
      return currentComment.filter((com) => com.id !== action.id);
    default:
      throw new Error('Ten blad nie powinnen sie zdarzyc: red def in comment');
  }
};

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

const Comments = () => {
  const { isLogged } = UserAuth();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [commentArr, dispach] = useReducer(commentReducer, []);
  const [httpState, dispachHttp] = useReducer(httpReducer, { loading: false, error: null });
  // const [commentArr, setCommentArr] = useState([]);

  // const [error, setError] = useState();
  //połaczenie z firebase tylko raz zaraz po wyrenderowaniu komponentu i to dzieki useEffect z pusta tablicą jako drugi argument - jeszcze bez catch & err
  // setIsLoading(true);
  useEffect(() => {
    console.log('RENDERING COMMENTS');
  });

  const filteredCommentsHandler = useCallback((filteredComments) => {
    dispach({ type: 'SET', comments: filteredComments });
  }, []);

  //połaczenie z firebase ustawienie metody przesyłu POST i przesłanie dodawanego komentarza jeszcze bez catch & err
  const addCommentHandler = (comment) => {
    dispachHttp({ type: 'SEND' });
    fetch('https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        dispachHttp({ type: 'RESPONSE' });
        return response.json();
      })
      .then((responseData) => {
        // setCommentArr((prevComments) => [...prevComments, { id: responseData.name, ...comment }]);
        dispach({ type: 'ADD', comment: { id: responseData.name, ...comment } });
      })
      .catch((error) => {
        dispachHttp({ type: 'ERROR', errorMessage: 'Błąd połączenia z bazą' });
      });
  };

  const removeCommentHandler = (commentId) => {
    dispachHttp({ type: 'SEND' });
    fetch(
      `https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`,
      {
        method: 'DELETE',
      },
    )
      .then((response) => {
        dispachHttp({ type: 'RESPONSE' });
        // setCommentArr((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
        dispach({ type: 'DELETE', id: commentId });
      })
      .catch((error) => {
        dispachHttp({ type: 'ERROR', errorMessage: 'Błąd połaczenia z bazą' });
      });
  };

  const clearError = () => {
    dispachHttp({ type: 'CLEAR' });
  };

  return (
    <>
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <div className={classes.comments}>
        <Filter onLoadComments={filteredCommentsHandler} />
        <ZoneMiddle>
          <CommentList
            loading={httpState.loading}
            comments={commentArr}
            onRemoveItem={removeCommentHandler}
          >
            {httpState.loading && <LoadingSpiner />}
          </CommentList>
        </ZoneMiddle>
        {isLogged && (
          <>
            <Route exact path="/people">
              <Redirect to="/people/comments"></Redirect>
            </Route>

            <Route path="/people/comments">
              <CommentForm onAddComment={addCommentHandler} />
            </Route>
          </>
        )}
        {!isLogged && (
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

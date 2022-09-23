import React, { useState, useEffect } from 'react';
import classes from '../Comments/Comments.module.css';
import CommentList from '../CommentList/CommentList';
import Filter from '../Filter/Filter';
import CommentForm from '../CommentForm/CommentForm';
import ZoneMiddle from '../../UI/Zones/ZoneMiddle';

const Comments = () => {
  const [commentArr, setCommentArr] = useState([]);

  //połaczenie z firebase tylko raz zaraz po wyrenderowaniu komponentu i to dzieki useEffect z pusta tablicą jako drugi argument - jeszcze bez catch & err
  useEffect(() => {
    fetch('https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
      .then((response) => response.json())
      .then((responseData) => {
        const loadedComments = [];
        for (const key in responseData) {
          loadedComments.push({
            id: key,
            name: responseData[key].name,
            contents: responseData[key].contents,
          });
        }
        setCommentArr(loadedComments);
      });
  }, []);

  useEffect(() => {
    console.log('RENDERING COMMENTS');
  });

  //połaczenie z firebase ustawienie metody przesyłu POST i przesłanie dodawanego komentarza jeszcze bez catch & err
  const addCommentHandler = (comment) => {
    fetch('https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setCommentArr((prevComments) => [...prevComments, { id: responseData.name, ...comment }]);
      });
  };

  const removeCommentHandler = (commentId) => {
    setCommentArr((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className={classes.comments}>
      <Filter />
      <ZoneMiddle>
        <CommentList comments={commentArr} onRemoveItem={removeCommentHandler} />
      </ZoneMiddle>
      <CommentForm onAddComment={addCommentHandler} />
    </div>
  );
};

export default Comments;

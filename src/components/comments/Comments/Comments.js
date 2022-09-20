import React, { useState } from 'react';
import classes from '../Comments/Comments.module.css';

const Comments = () => {
  const [comment, setComment] = useState([]);

  return (
    <div className={classes.comments}>
      <section>{/* tu bedzie lista */}</section>
    </div>
  );
};

export default Comments;

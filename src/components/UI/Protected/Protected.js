import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';

const Protected = (props) => {
  const { user } = UserAuth();

  if (!user) {
    return (
      <Route>
        <Redirect to={`/${props.pathB}`}></Redirect>
      </Route>
    );
  }

  return (
    <Route>
      <Redirect to={`/${props.pathA}`}> {props.children}</Redirect>
    </Route>
  );
};

export default Protected;

// import { useContext, createContext } from 'react';
import React, { useState } from 'react';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; //signOut, onAuthStateChanged
// import { auth } from '../Firebase';

const AuthContext = React.createContext({
  isLogged: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLogged: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

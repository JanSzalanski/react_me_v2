// import { useContext, createContext } from 'react';
import React from 'react';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; //signOut, onAuthStateChanged
// import { auth } from '../Firebase';

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;

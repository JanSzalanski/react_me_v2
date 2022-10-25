import { useContext, createContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; //signOut, onAuthStateChanged
import { auth } from '../Firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return <AuthContextProvider value={{ googleSignIn }}>{children}</AuthContextProvider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

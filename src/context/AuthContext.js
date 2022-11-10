import { useContext } from 'react';
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; //signOut, onAuthStateChanged
import { auth } from '../Firebase';

const AuthContext = React.createContext({
  isLogged: false,
  onLogin: () => {},
  onLogout: () => {},
  googleLogged: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const googleSingIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        googleLogged: googleSingIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

// export default AuthContext;

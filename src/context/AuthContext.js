import React, { useState, useContext, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'; //signOut, onAuthStateChanged
import { auth } from '../Firebase';

const AuthContext = React.createContext({
  googleLogged: () => {},
  googleLogout: () => {},
  user: {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});

  const logoutHandler = () => {
    signOut(auth);
    localStorage.removeItem('name');
    localStorage.removeItem('eamil');
    localStorage.removeItem('profilePic');
    setUser({});
    console.log('User logout', user);
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     googleSingIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic', profilePic);
      })
      .catch((error) => {
        // setErrorGoogle(true);
        throw new Error('Błąd autoryzacji za pomocą konta google');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        googleLogged: handleGoogleSignIn,
        googleLogout: logoutHandler,
        user: user,
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

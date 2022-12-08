import React, { useState, useContext, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'; //signOut, onAuthStateChanged
import { auth } from '../Firebase';

const AuthContext = React.createContext({
  googleLogged: () => {},
  googleLogout: () => {},
  loged: false,
  user: {},
});

const calcRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  console.log('currentTime ' + currentTime);
  const adjExpirationTime = new Date(expirationTime).getTime();
  console.log('adjExpirationTime ' + adjExpirationTime);
  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

export const AuthContextProvider = (props) => {
  const [isloged, setIsLogged] = useState(localStorage.getItem('loged') ? true : false);
  const [user, setUser] = useState({});

  // const handleGoogleSignIn = async () => {
  //   try {
  //     googleSingIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('User', currentUser);
    });
    return () => {
      // console.log('unsuscribe logout?');
      setUser({});
      setIsLogged(false);
      unsubscribe();
    };
  }, []);

  const logoutHandler = () => {
    signOut(auth);
    localStorage.removeItem('name');
    localStorage.removeItem('eamil');
    localStorage.removeItem('profilePic');
    localStorage.removeItem('loged');
    // console.log('loged false in logout function');
    setIsLogged(false);
    setUser({});
    // console.log('User logout', user);expirationTime
  };

  const handleGoogleSignIn = (expirationTime) => {
    const provider = new GoogleAuthProvider();
    console.log('expirationTime ' + expirationTime);
    const remainingTime = calcRemainingTime(expirationTime);
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic', profilePic);
        localStorage.setItem('loged', true);
        setUser(result.user);
        setIsLogged(true);
      })
      .catch((error) => {
        // setErrorGoogle(true);
        throw new Error('Błąd autoryzacji za pomocą konta google');
      });
    console.log('remainingTime ' + remainingTime);
    setTimeout(logoutHandler, remainingTime);
  };

  return (
    <AuthContext.Provider
      value={{
        googleLogged: handleGoogleSignIn,
        googleLogout: logoutHandler,
        loged: isloged,
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

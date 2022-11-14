import React, { useState, useContext, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'; //signOut, onAuthStateChanged
import { auth } from '../Firebase';

const AuthContext = React.createContext({
  googleLogged: () => {},
  googleLogout: () => {},
  loged: false,
  user: {},
});

export const AuthContextProvider = (props) => {
  const [isloged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  const logoutHandler = () => {
    signOut(auth);
    localStorage.removeItem('name');
    localStorage.removeItem('eamil');
    localStorage.removeItem('profilePic');
    setIsLogged(false);
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
        setUser(result.user);
        setIsLogged(true);
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
      console.log('unsuscribe logout?');
      setUser({});
      setIsLogged(false);
      unsubscribe();
    };
  }, []);

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

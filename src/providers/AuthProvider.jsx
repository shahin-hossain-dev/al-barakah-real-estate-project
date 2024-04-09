import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sing in with email & password
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // login with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // login with github
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // logout
  const logout = () => {
    return signOut(auth);
  };
  // on auth state change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    userLogin,
    googleLogin,
    githubLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

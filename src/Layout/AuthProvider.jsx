import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        axios
          .post(`${import.meta.env.VITE_base_url}/jwt`, {
            email: currentUser.email,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const updataUserProfile = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };
  const userLogOut = () => {
    return signOut(auth);
  };
  const userInfo = {
    user,
    setUser,
    loading,
    userLogOut,
    setLoading,
    signInUser,
    signInGoogle,
    createUser,
    updataUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

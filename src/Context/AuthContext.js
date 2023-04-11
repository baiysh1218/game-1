import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import app, { auth } from "../components/Header/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");

  const handleRegister = () => {
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log(res);

        localStorage.setItem("email", JSON.stringify(res.user.email));
        if (res.user.displayName !== null || res.user.photoURL !== null) {
          localStorage.setItem("name", JSON.stringify(res.user.displayName));
          localStorage.setItem("profilePic", JSON.stringify(res.user.photoURL));
        }
        localStorage.setItem("access", JSON.stringify(res.user.accessToken));
      })
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            alert("Вы уже зарегестрировались войдите в аккаунт");
            break;
          case "auth/weak-password":
            setErrorMsg("Weak password");
            break;
        }
      });
  };

  const handleLogin = () => {
    setErrorMsg("");
    signInWithEmailAndPassword(auth, emailValid, passwordValid)
      .then(res => {
        console.log(res);
        localStorage.setItem("access", JSON.stringify(res.user.accessToken));
        localStorage.setItem("email", JSON.stringify(res.user.email));
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const authListener = () => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  const forgetPassword = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset mail sent");
      })
      .catch(() => {
        alert("Invalid mail or user not found");
      });
  };

  return (
    <authContext.Provider
      value={{
        user,
        email,
        password,
        emailValid,

        errorMsg,
        hasAccount,

        setUser,
        setPassword,
        setEmail,
        setHasAccount,
        setEmailValid,
        setPasswordValid,

        handleLogin,
        handleLogout,
        handleRegister,
        forgetPassword,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app, { auth } from "../components/Header/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");

  const [helper, setHelper] = useState(false);

  const auth = getAuth();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        localStorage.setItem("email", JSON.stringify(user.email));
        localStorage.setItem("token", JSON.stringify(user.accessToken));
        navigate("/Allquestions");
      })
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;

          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
      .finally(() => setHelper(!helper));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        localStorage.setItem("email", JSON.stringify(user.email));
        localStorage.setItem("token", JSON.stringify(user.accessToken));

        navigate("/Allquestions");
      })
      .catch(err => {
        switch (err.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;

          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const authListener = () => {
    auth.onAuthStateChanged(user => {
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

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCNU_w3x0uwBqiAm_9dnpC6QlrYJobZ5qI",
  authDomain: "baiysh-f97cd.firebaseapp.com",
  projectId: "baiysh-f97cd",
  storageBucket: "baiysh-f97cd.appspot.com",
  messagingSenderId: "228782998474",
  appId: "1:228782998474:web:4fa2fccf14e10555ff0533",
};

const app = initializeApp(firebaseConfig);
export default app;

export const db = getFirestore(app);

export const auth = getAuth(app);

const gitHub = new GithubAuthProvider();

//! Goole

export const signInWithGoole = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then(result => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
};

//! gitHub

export const signInWithGitHub = () => {
  signInWithPopup(auth, gitHub)
    .then(res => {
      const name = res.user.displayName;
      const email = res.user.email;
      const profilePic = res.user.photoURL;
      const accessToken = res.user.accessToken;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("access", accessToken);
    })
    .catch(e => console.log(e));
};

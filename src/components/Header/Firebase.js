import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN9N5GJWIID9b8YgQ1rpYbc-kTGJqOX5M",
  authDomain: "authgame-2b102.firebaseapp.com",
  projectId: "authgame",
  storageBucket: "authgame.appspot.com",
  messagingSenderId: "361389657812",
  appId: "1:361389657812:web:a11b02ca97cffd3b0eb541",
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

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJudd0OWhH4T3_-lLn8vdI0XRtAOQE8m4",
  authDomain: "auth-33803.firebaseapp.com",
  projectId: "auth-33803",
  storageBucket: "auth-33803.appspot.com",
  messagingSenderId: "64615969374",
  appId: "1:64615969374:web:060977d0c071dbb625bacf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoole = () => {
  signInWithPopup(auth, provider)
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

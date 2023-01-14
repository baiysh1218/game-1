import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { createTheme } from "@mui/system";
import { db } from "../components/Header/Firebase";

export const quesionContext = React.createContext();

const QuesionContextProvider = ({ children }) => {
  const [back, setBack] = useState([{ question: "Hi", answer: "Hi" }]);

  const usersCollectionRef = collection(db, "game");

  async function getQuestion() {
    const data = await getDocs(usersCollectionRef);
    setBack(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    getQuestion();
  }, []);

  const createQuestion = async newQuestion => {
    await addDoc(usersCollectionRef, newQuestion);
    getQuestion();
  };

  // const getQuestion = async () => {
  //   const data = await getDocs(usersCollectionRef);
  //   setBack(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  // };

  const deleteQuestion = async id => {
    const userDoc = doc(db, "game", id);
    await deleteDoc(userDoc);
    getQuestion(setBack);
  };

  return (
    <quesionContext.Provider
      value={{
        setBack,
        back,
        createQuestion,
        deleteQuestion,
        getQuestion,
        usersCollectionRef,
      }}>
      {children}
    </quesionContext.Provider>
  );
};

export default QuesionContextProvider;

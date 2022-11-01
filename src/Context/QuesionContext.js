import axios from "axios";
import React, { useReducer } from "react";

export const quesionContext = React.createContext();

const INIT_STATE = {
  question: [{ question: "hi", answer: "hi", id: 1 }],
  newQuesions: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_QUESTION":
      return { ...state, question: action.payload.data };
    case "EDIT_QUESTION":
      return { ...state, newQuestions: action.payload };
    default:
      return state;
  }
}

const API = "http://localhost:8000/quistion";

const QuesionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createQuestion(newQuestion) {
    await axios.post(API, newQuestion);
    getQiestion();
  }

  async function getQiestion() {
    const response = await axios(API);
    // console.log(response);
    dispatch({
      type: "GET_QUESTION",
      payload: response,
    });
  }

  async function deleteQuestion(id) {
    await axios.delete(`${API}/${id}`);
    getQiestion();
  }

  async function editQuestion(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "EDIT_QUESTION",
      payload: res.data,
    });
  }

  async function updateQuestion(id, editObj) {
    await axios.patch(`${API}/${id}`, editObj);
    getQiestion();
  }

  // console.log(state.question);

  return (
    <quesionContext.Provider
      value={{
        question: state.question,
        newQuestion: state.newQuestions,
        createQuestion,
        getQiestion,
        deleteQuestion,
        editQuestion,
        updateQuestion,
      }}>
      {children}
    </quesionContext.Provider>
  );
};

export default QuesionContextProvider;

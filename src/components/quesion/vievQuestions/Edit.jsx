import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { quesionContext } from "../../../Context/QuesionContext";

const Edit = () => {
  const { newQuestion, editQuestion, updateQuestion } =
    useContext(quesionContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    editQuestion(id);
  }, []);
  useEffect(() => {
    if (newQuestion) {
      setQuestion(newQuestion.question);
      setAnswer(newQuestion.answer);
    }
  }, [newQuestion]);
  function handleSave() {
    let editObj = {
      question,
      answer,
    };
    updateQuestion(id, editObj);
    navigate("/vievQuestion");
  }
  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <input
        type="text"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />
      <button
        onClick={() => {
          handleSave();
        }}>
        Сохранить изменение
      </button>
    </div>
  );
};

export default Edit;

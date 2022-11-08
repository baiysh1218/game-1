import { Card, Paper } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { quesionContext } from "../../../Context/QuesionContext";

const Viev = () => {
  const { question, getQiestion, deleteQuestion } = useContext(quesionContext);
  const navigate = useNavigate();
  useEffect(() => {
    getQiestion();
  }, []);
  return (
    <div className="card-block">
      {question.map(item => (
        <div key={item.id} className="card-cild-block">
          <div className="card-content">
            <span>Вопрос: {item.question} </span>
            <span>Ответ: {item.answer}</span>
          </div>
          <button
            onClick={() => {
              deleteQuestion(item.id);
            }}>
            Удалить
          </button>
          <button onClick={() => navigate(`/editQuestion/${item.id}`)}>
            Изменить
          </button>
        </div>
      ))}
    </div>
  );
};

export default Viev;

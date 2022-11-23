import { Button, Card, Paper } from "@mui/material";
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
            <h4>Вопрос: {item.question} </h4>
            <span>Ответ: {item.answer}</span>
          </div>
          <div className="btn-viev">
            <Button
              variant="contained"
              color="success"
              className="btn-vuvu"
              onClick={() => {
                deleteQuestion(item.id);
              }}>
              Удалить
            </Button>
            <Button
              variant="contained"
              color="success"
              className="btn-vuvu"
              onClick={() => navigate(`/editQuestion/${item.id}`)}>
              Изменить
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viev;

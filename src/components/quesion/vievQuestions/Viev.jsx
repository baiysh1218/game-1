import { Button, Card, Paper } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { quesionContext } from "../../../Context/QuesionContext";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getQiestion,
} from "firebase/firestore";

const Viev = () => {
  const { getQuestion, deleteQuestion, back, setBack } =
    useContext(quesionContext);

  const navigate = useNavigate();

  useEffect(() => {
    getQuestion(setBack);
  }, []);

  console.log(back);

  return (
    <div className="card-block">
      {back.map(item => (
        <div
          key={item.id}
          className="card-cild-block"
          style={{
            backgroundColor: "rgba(79, 79, 79, 0.5)",
            padding: "2%",
            borderRadius: "25px",
          }}>
          <div className="card-content">
            <h4>Вопрос: {item.question} </h4>
            <span>Ответ: {item.answer}</span>
          </div>
          <div className="btn-viev">
            <Button
              style={{ marginTop: "2%" }}
              variant="contained"
              color="success"
              className="btn-vuvu"
              onClick={() => {
                deleteQuestion(item.id);
              }}>
              Удалить
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viev;

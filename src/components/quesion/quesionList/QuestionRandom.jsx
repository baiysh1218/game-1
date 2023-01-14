import { type } from "@testing-library/user-event/dist/type";
import React, { useCallback, useState, useContext, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CropSquareIcon from "@mui/icons-material/CropSquare";

import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import "./Question.css";
import { quesionContext } from "../../../Context/QuesionContext";

const QuestionRandom = ({ random }) => {
  const { getQuestion, setBack, back } = useContext(quesionContext);
  const [answerToQuestion, setAnswerToQuestion] = useState("");
  const [one, setOne] = useState("");
  const [answerArray, setAnswerArray] = useState([]);

  const name = localStorage.getItem("name");

  let answer = random.answer;

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  function updateQuestion() {
    getQuestion();
    setAnswerArray([]);
    setOne("");
    setAnswerToQuestion("");
  }

  function handleSave2() {
    if (answerArray.length === 0) {
      for (let i = 0; i < answer.length; i++) {
        answerArray[i] = "▩";
      }
    }

    if (answer.toUpperCase().search(one.toUpperCase())) {
      Toast.fire({
        icon: "error",
        title: "К сожедению буква не совподает",
      });
    }

    answerArray.map((item, index) => {
      if (answer[index].toUpperCase() === one.toUpperCase()) {
        if (answer[index].toUpperCase() === answerArray[index].toUpperCase()) {
          Toast.fire({
            icon: "warning",
            title: "Жаль! Но эту букву вы уже отгадали",
          });
        } else {
          answerArray[index] = one;
          Toast.fire({
            icon: "success",
            title: "Отлично! Вы отгадали букву",
          });
        }
      }
    });

    if (
      answerArray.toString().toUpperCase() ===
      answer.split("").toString().toUpperCase()
    ) {
      Swal.fire(`Отличная работа!`, `правильное слово ${answer}`, "success");
      getQuestion();
      setAnswerArray([]);
    }

    setOne("");
  }

  function handleSave1() {
    if (answer.toUpperCase() === answerToQuestion.toUpperCase()) {
      Swal.fire(`Отличная работа!`, `правильное слово ${answer}`, "success");
      getQuestion();
      setAnswerArray([]);
    }
    if (answer.toUpperCase().search(answerToQuestion.toUpperCase())) {
      Swal.fire(
        "К сожелению не правильное слово",
        "Нажмите на кнопку",
        "error"
      );
    }
    if (!sessionStorage.getItem("point")) {
      sessionStorage.setItem("point", +1);
    } else {
      const point = sessionStorage.getItem("point");
      sessionStorage.setItem("point", +point + 1);
    }

    setAnswerToQuestion("");
  }

  return (
    <div>
      <div className="modal-question">
        <div className="question-block-answer-length">
          <h2 className="question-array" style={{ height: "38.391px" }}>
            {answerArray}
          </h2>
          {/* <h4>{answer.length} букв</h4> */}
        </div>

        <Button
          onClick={() => {
            updateQuestion();
          }}
          style={{
            marginTop: "15px",
          }}
          color="success">
          следующий вопрос
        </Button>

        <TextField
          id="outlined-search"
          label="Введите букву"
          type="search"
          style={{
            marginTop: "15px",
          }}
          value={one}
          onChange={e => setOne(e.target.value)}
        />
        {one.length === 0 || one.length > 1 ? (
          <Button
            onClick={() => handleSave2()}
            disabled
            style={{
              marginTop: "15px",
            }}>
            Введите букву
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleSave2();
            }}
            className="button"
            variant="contained"
            color="success"
            style={{
              marginTop: "15px",
            }}>
            проверить букву
          </Button>
        )}
      </div>
      <div className="modal-question">
        <TextField
          id="outlined-search"
          label="Введите слово целиком"
          type="search"
          style={{
            marginTop: "15px",
          }}
          value={answerToQuestion}
          onChange={e => setAnswerToQuestion(e.target.value)}
        />
        {answerToQuestion.length === 0 ||
        answerToQuestion.length > answer.length ? (
          <Button
            disabled
            style={{
              marginTop: "15px",
            }}>
            Введите слово
          </Button>
        ) : (
          <Button
            onClick={() => handleSave1()}
            variant="contained"
            color="success"
            style={{
              marginTop: "15px",
            }}>
            проверить слово
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionRandom;

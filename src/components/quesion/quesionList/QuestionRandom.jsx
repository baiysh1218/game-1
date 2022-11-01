import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Question.css";

const QuestionRandom = ({ props }) => {
  const [answerToQuestion, setAnswerToQuestion] = useState("");
  const [one, setOne] = useState("");

  let answer = props.answer;

  function handleSave1() {
    for (let i = 0; i < answer.length; i++) {
      for (let j = 0; j < answerToQuestion.length; j++) {
        if (answer[i].toUpperCase() === answerToQuestion[j].toUpperCase()) {
          var res = "Ответ правильный!";
        }
      }
    }
    alert(res);
  }

  function handleSave2() {
    if (one > 1) {
      alert("вводите только одну букву");
    }
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === one) {
        var res = "ответ правильный!";
      } else if (answer[i] !== one) {
        var res2 = "Не правильная буква";
      }
    }
    if (res) {
      alert(res);
    } else {
      alert(res2);
    }
  }

  return (
    <div>
      <div className="modal-question">
        <TextField
          id="outlined-search"
          label="Введите букву"
          type="search"
          style={{
            marginTop: "15px",
          }}
          value={one}
          onChange={e => setOne(e.target.value)}
          placeholder="Введите слово"
        />

        <Button
          onClick={() => handleSave2()}
          variant="contained"
          color="success"
          style={{
            marginTop: "15px",
          }}>
          проверить букву
        </Button>
      </div>
      <div className="modal-question">
        <TextField
          id="outlined-search"
          label="Введите слово"
          type="search"
          style={{
            marginTop: "15px",
          }}
          value={answerToQuestion}
          onChange={e => setAnswerToQuestion(e.target.value)}
        />
        <Button
          onClick={() => handleSave1()}
          variant="contained"
          color="success"
          style={{
            marginTop: "15px",
          }}>
          проверить слово
        </Button>
      </div>
    </div>
  );
};

export default QuestionRandom;

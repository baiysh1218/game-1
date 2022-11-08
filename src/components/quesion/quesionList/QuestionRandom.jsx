import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Question.css";

const QuestionRandom = ({ props }) => {
  const [answerToQuestion, setAnswerToQuestion] = useState("");
  const [one, setOne] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  // console.log(answerArray);

  let answer = props.answer;

  // function handleSave1() {
  //   for (let i = 0; i < answer.length; i++) {
  //     for (let j = 0; j < answerToQuestion.length; j++) {
  //       if (answer[i].toUpperCase() === answerToQuestion[j].toUpperCase()) {
  //         var res = "Ответ правильный!";
  //       }
  //     }
  //   }
  //   alert(res);
  // }

  function handleSave2() {
    for (let i = 0; i < answer.length; i++) {
      answerArray[i] = "_";
    }

    answerArray.map((item, index) => {
      if (answer[index] === one) {
        return (answerArray[index] = one);
      } else {
        return item;
      }
    });

    setOne("");
  }
  console.log(answerArray);

  return (
    <div>
      <div className="modal-question">
        <h2>{answerArray}</h2>
        <h2>{answer.length}</h2>

        {answer.toUpperCase() === answerToQuestion.toUpperCase() ? (
          <div>правильное слово</div>
        ) : (
          <div>Ждём праивльного ответа!</div>
        )}

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
        {one.length === 0 ? (
          <Button
            // onClick={() => handleSave2()}
            variant="contained"
            disabled
            color="error"
            style={{
              marginTop: "15px",
            }}>
            Введите букву
          </Button>
        ) : (
          <Button
            onClick={() => handleSave2()}
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
          label="Введите слово"
          type="search"
          style={{
            marginTop: "15px",
          }}
          value={answerToQuestion}
          onChange={e => setAnswerToQuestion(e.target.value)}
        />
        {answerToQuestion.length === 0 ? (
          <Button
            // onClick={() => handleSave1()}
            variant="contained"
            disabled
            color="error"
            style={{
              marginTop: "15px",
            }}>
            Введите слово
          </Button>
        ) : (
          <Button
            // onClick={() => handleSave1()}
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

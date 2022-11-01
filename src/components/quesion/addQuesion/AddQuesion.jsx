import { Alert, Stack, Box } from "@mui/material";
import React, { useContext, useRef } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { quesionContext } from "../../../Context/QuesionContext";
import Viev from "../vievQuestions/Viev";

const AddQuesion = () => {
  const { createQuestion } = useContext(quesionContext);
  const navigate = useNavigate();
  const [question, setQuesion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSave() {
    let newQuestion = {
      question,
      answer,
    };
    if (!question.trim() || !answer.trim()) {
      alert("пожалуиста заполните поля!");
    } else {
      createQuestion(newQuestion);
      navigate("/Allquestions");
    }
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}>
      <h2>Adding</h2>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "500px",
        }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5%",
          }}>
          <TextField
            onChange={e => setQuesion(e.target.value)}
            value={question}
            id="outlined-search"
            label="question"
            type="search"
            style={{
              marginTop: "15px",
            }}
          />
          <TextField
            onChange={e => setAnswer(e.target.value)}
            value={answer}
            id="outlined-search"
            label="answer"
            type="search"
            style={{
              marginTop: "15px",
            }}
          />
          <Button
            onClick={() => handleSave()}
            variant="contained"
            color="success"
            style={{
              marginTop: "15px",
            }}>
            Add Question
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddQuesion;

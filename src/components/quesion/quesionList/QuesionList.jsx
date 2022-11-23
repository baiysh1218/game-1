import { QuestionAnswer } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button } from "@mui/material";

import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { quesionContext } from "../../../Context/QuesionContext";
import { signInWithGoole } from "../../Header/Firebase";
import QuestionRandom from "./QuestionRandom";

const QuesionList = () => {
  const { getQiestion, question } = useContext(quesionContext);
  const navigate = useNavigate();

  function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  useEffect(() => {
    getQiestion();
  }, []);

  let random = arrayRandElement(question);

  const name = localStorage.getItem("name");

  return (
    <div className="que-list">
      <div className="icon-button-info"></div>
      <h1 className="que-h1">{random.question}</h1>
      <QuestionRandom props={random} />
    </div>
  );
};

export default QuesionList;

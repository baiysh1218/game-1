import { QuestionAnswer } from "@mui/icons-material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { quesionContext } from "../../../Context/QuesionContext";
import QuestionRandom from "./QuestionRandom";

const QuesionList = () => {
  const { getQiestion, question } = useContext(quesionContext);

  function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  useEffect(() => {
    getQiestion();
  }, []);

  let random = arrayRandElement(question);
  let answer = random.answer;

  return (
    <div className="que-list">
      <h1 className="que-h1">{random.question}</h1>
      <h3 className="que-h3">длинна ответа {answer.length}</h3>
      <QuestionRandom props={random} />
    </div>
  );
};

export default QuesionList;
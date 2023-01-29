import { QuestionAnswer } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button } from "@mui/material";

import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { quesionContext } from "../../../Context/QuesionContext";
import { signInWithGitHub, signInWithGoole } from "../../Header/Firebase";
import Login from "../../Login/Login";
import QuestionRandom from "./QuestionRandom";

const QuesionList = () => {
  const { getQiestion, back } = useContext(quesionContext);
  const navigate = useNavigate();

  function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  let random = arrayRandElement(back);

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <div className="que-list">
      {!email ? (
        <Login />
      ) : (
        <div>
          <div className="icon-button-info"></div>
          <h1 className="que-h1">{random.question}</h1>
          <QuestionRandom
            back={back}
            arrayRandElement={arrayRandElement}
            random={random}
          />
        </div>
      )}
    </div>
  );
};

export default QuesionList;

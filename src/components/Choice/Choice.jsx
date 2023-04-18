import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import "./choice.css";

const Choice = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Login");
    }
  }, []);

  return (
    <div className="choice-main-block">
      <div className="questions" onClick={() => navigate("/Allquestions")}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3874/3874176.png"
          alt=""
          className="question-img"
        />
        <h5>Угадай слово</h5>
      </div>
      <div
        onClick={() => navigate("/Board")}
        className="tic-tac-toe-block-choice">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1427/1427673.png"
          alt=""
          className="tic-tac-toe-block-choice-img"
        />
        <h5>Крестики нолики </h5>
      </div>
    </div>
  );
};

export default Choice;

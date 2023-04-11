import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoole, signInWithGitHub } from "../Header/Firebase";
import "./welcome.css";

const Welcome = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  function valid() {
    email ? navigate("/Login") : navigate("/choice");
  }

  return (
    <div className="main-walcome">
      <div className="text" data-text="Welcome" onClick={valid}>
        Welcome
      </div>
    </div>
  );
};

export default Welcome;

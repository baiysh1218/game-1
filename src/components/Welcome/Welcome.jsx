import React from "react";
import { useNavigate } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="main-walcome">
      <div
        className="text"
        data-text="Welcome"
        onClick={() => {
          navigate("/Allquestions");
        }}>
        Welcome
      </div>
    </div>
  );
};

export default Welcome;

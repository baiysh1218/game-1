import React from "react";
import { Route, Routes } from "react-router-dom";
import AddQuesion from "./components/quesion/addQuesion/AddQuesion";
import QuesionList from "./components/quesion/quesionList/QuesionList";
import QuestionInfo from "./components/quesion/quesionList/QuestionInfo";
import Edit from "./components/quesion/vievQuestions/Edit";
import Viev from "./components/quesion/vievQuestions/Viev";
import Welcome from "./components/Welcome/Welcome";
import QuesionContextProvider from "./Context/QuesionContext";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/addquesion" element={<AddQuesion />} />
      <Route path="/Allquestions" element={<QuesionList />} />
      <Route path="/vievQuestion" element={<Viev />} />
      <Route path="/game-info" element={<QuestionInfo />} />
      <Route path="/editQuestion/:id" element={<Edit />} />
    </Routes>
  );
};

export default Routing;

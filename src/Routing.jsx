import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import AddQuesion from "./components/quesion/addQuesion/AddQuesion";
import QuesionList from "./components/quesion/quesionList/QuesionList";
import Edit from "./components/quesion/vievQuestions/Edit";
import Viev from "./components/quesion/vievQuestions/Viev";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";

const Routing = ({ theme, setTheme }) => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/addquesion" element={<AddQuesion />} />
      <Route path="/Allquestions" element={<QuesionList />} />
      <Route path="/vievQuestion" element={<Viev />} />
      <Route path="/My-Profile" element={<Profile />} />
      <Route path="/editQuestion/:id" element={<Edit />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default Routing;

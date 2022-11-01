import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import QuesionContextProvider from "./Context/QuesionContext";
import Routing from "./Routing";

const App = () => {
  return (
    <QuesionContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </QuesionContextProvider>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import QuesionContextProvider from "./Context/QuesionContext";
import Routing from "./Routing";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import { Button } from "@mui/material";

const App = () => {
  const [theme, setTheme] = useState("light");
  const email = localStorage.getItem("email");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <QuesionContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header theme={theme} setTheme={setTheme} />
          <Routing />
        </ThemeProvider>
      </BrowserRouter>
    </QuesionContextProvider>
  );
};

export default App;

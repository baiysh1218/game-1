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
import AuthContextProvider from "./Context/AuthContext";
import app from "./components/Header/Firebase";

const App = () => {
  const [theme, setTheme] = useState("light");
  // const email = JSON.parce.(localStorage.getItem("email"));

  // const theme = JSON.parse(sessionStorage.getItem("theme"));

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <QuesionContextProvider>
      <AuthContextProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header theme={theme} setTheme={setTheme} />
          <Routing />
        </ThemeProvider>
      </AuthContextProvider>
    </QuesionContextProvider>
  );
};

export default App;

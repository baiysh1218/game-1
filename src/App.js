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
  const email = localStorage.getItem("email");

  // const sessionTheme = sessionStorage.getItem("theme");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <QuesionContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header theme={theme} setTheme={setTheme} />
            <Routing />
          </ThemeProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </QuesionContextProvider>
  );
};

export default App;

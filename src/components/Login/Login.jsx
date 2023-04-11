import React, { useState, useContext } from "react";
import { signInWithGitHub, signInWithGoole } from "../Header/Firebase";
import { TextField, Button, Box, Typography, Grid, Link } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { QueryStartAtConstraint } from "firebase/firestore";
import { quesionContext } from "../../Context/QuesionContext";
import { authContext } from "../../Context/AuthContext";
import { logDOM } from "@testing-library/react";

const Login = () => {
  const { setValidLogin } = useContext(quesionContext);

  const {
    password,
    email,
    errorMsg,
    hasAccount,
    setEmail,
    setHasAccount,
    setPassword,
    handleLogin,
    handleRegister,
    forgetPassword,
  } = useContext(authContext);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const navigate = useNavigate();

  // function path() {
  //   handleRegister();
  //   navigate("/Allquestions");
  // }

  // function validGoole() {
  //   signInWithGoole();
  //   navigate("/Allquestions");
  // }

  // function validGitHub() {
  //   signInWithGitHub();
  //   setValidLogin(true);
  //   navigate("/Allquestions");
  // }

  return (
    <div className="login__main_block">
      <Box>
        <Box>
          <Typography variant="h5" style={{ marginBottom: "6%" }}>
            Registration
          </Typography>
          <Typography>Email</Typography>

          <TextField
            style={{ margin: "10px" }}
            type="text"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />

          <Box>
            <Typography>Password</Typography>

            <TextField
              style={{ margin: "10px" }}
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                handleRegister();
              }}>
              Register
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography variant="a">
          Уже зарегестрированы?
          <Button onClick={() => navigate("/SignIn")}>Войти в аккаунт</Button>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;

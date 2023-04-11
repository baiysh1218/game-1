import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";

const SignIn = () => {
  const {
    emailValid,
    setEmailValid,
    handleLogin,
    setPasswordValid,
    setEmail,
    setPassword,
  } = useContext(authContext);

  const emailToLocacl = localStorage.getItem("email");

  const navigate = useNavigate();

  // function validEmail() {
  //   if (email !== emailValid) {
  //     alert("Не правильный Email");
  //   } else {
  //     handleLogin();
  //   }
  // }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography variant="h3">SIGN IN</Typography>
      <Typography style={{ marginTop: "2%" }}>Email</Typography>
      <TextField
        type="email"
        required
        id="email"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={e => setEmail(e.target.value)}
      />
      <Typography style={{ marginTop: "2%" }}>Password</Typography>
      <TextField
        type="password"
        required
        name="password"
        id="password"
        autoComplete="current-password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        style={{ marginTop: "2%" }}
        variant="contained"
        onClick={() => {
          handleLogin();
        }}>
        Login
      </Button>
    </div>
  );
};

export default SignIn;

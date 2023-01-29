import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";

const SignIn = () => {
  const { emailValid, setEmailValid, handleLogin, setPasswordValid } =
    useContext(authContext);
  const email = localStorage.getItem("email");
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
      <Typography style={{ marginTop: "2%" }}>Email</Typography>
      <TextField onChange={e => setEmailValid(e.target.value)} />
      <Typography style={{ marginTop: "2%" }}>Password</Typography>
      <TextField onChange={e => setPasswordValid(e.target.value)} />
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

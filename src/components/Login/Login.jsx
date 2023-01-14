import React, { useState } from "react";
import { signInWithGitHub, signInWithGoole } from "../Header/Firebase";
import { TextField, Button, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState();
  const [gmail, setGmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const navigate = useNavigate();

  return (
    <div className="login__main_block">
      <h2>Регистрация</h2>
      <TextField
        style={{ margin: "10px" }}
        type="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />
      <TextField
        style={{ margin: "10px" }}
        type="text"
        placeholder="Gmail"
        onChange={e => setGmail(e.target.value)}
      />
      <TextField
        style={{ margin: "10px" }}
        type="text"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        style={{ margin: "10px" }}
        type="text"
        placeholder="Password"
        onChange={e => setPassword2(e.target.value)}
      />
      <Button variant="contained">Login</Button>

      <Box style={{ width: "40%" }}>
        <Button
          variant="contained"
          onClick={() => {
            signInWithGoole();
            navigate("/Allquestions");
          }}
          style={{ margin: "1%", marginTop: "2%" }}>
          <GoogleIcon /> Google
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            signInWithGitHub();
            navigate("/Allquestions");
          }}
          style={{ margin: "1%", marginTop: "2%" }}>
          <GitHubIcon /> GitHub
        </Button>
      </Box>
    </div>
  );
};

export default Login;

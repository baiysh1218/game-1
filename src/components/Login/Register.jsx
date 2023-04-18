import { Button } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import { signInWithGitHub, signInWithGoole } from "../Header/Firebase";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const Register = () => {
  return (
    <div>
      <Box style={{ width: "70%" }}>
        <Button
          variant="contained"
          onClick={signInWithGoole}
          style={{ margin: "1%", marginTop: "2%" }}>
          <GoogleIcon /> Google
        </Button>
        <Button
          variant="contained"
          onClick={signInWithGitHub}
          style={{ margin: "1%", marginTop: "2%" }}>
          <GitHubIcon /> GitHub
        </Button>
      </Box>
    </div>
  );
};

export default Register;

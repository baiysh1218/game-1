import { Button } from "@mui/material";
import { Box } from "@mui/system";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const Register = () => {
  return (
    <div>
      <Box style={{ width: "70%" }}>
        <Button
          variant="contained"
          onClick={validGoole}
          style={{ margin: "1%", marginTop: "2%" }}>
          <GoogleIcon /> Google
        </Button>
        <Button
          variant="contained"
          onClick={validGitHub}
          style={{ margin: "1%", marginTop: "2%" }}>
          <GitHubIcon /> GitHub
        </Button>
      </Box>
    </div>
  );
};

export default Register;

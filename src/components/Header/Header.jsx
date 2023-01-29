import React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signInWithGitHub, signInWithGoole } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { quesionContext } from "../../Context/QuesionContext";
import { authContext } from "../../Context/AuthContext";

export default function BasicMenu({ theme, setTheme }) {
  const { setValidLogin } = useContext(quesionContext);
  const { handleLogout } = useContext(authContext);
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      // sessionStorage.setItem("theme", "dark");
    }
    if (theme === "dark") {
      setTheme("light");
      // sessionStorage.setItem("theme", "light");
    }
  }

  function logOut() {
    localStorage.clear();
    handleLogout();

    setValidLogin(false);
  }

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const imgProfile = localStorage.getItem("profilePic");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const point = sessionStorage.getItem("point");

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        {email ? (
          <div className="avatar-block">
            <Avatar src={imgProfile} />

            <span className="span-avatar">{name}</span>
          </div>
        ) : (
          <Avatar src="/broken-image.jpg" />
        )}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {email ? (
          <MenuItem
            onClick={() => {
              logOut();
            }}>
            Выйти
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              navigate("/Login");
            }}>
            Войти
          </MenuItem>
        )}
        {email ? (
          <MenuItem
            onClick={() => {
              navigate("/my-profile");
            }}>
            Мой Аккаунт
          </MenuItem>
        ) : (
          ""
        )}
        {email ? (
          <MenuItem
            onClick={() => {
              navigate("/Allquestions");
            }}>
            Играть
          </MenuItem>
        ) : (
          ""
        )}

        <MenuItem
          onClick={() => {
            changeTheme();
          }}>
          Сменить тему
        </MenuItem>
        {email === "baiyshbeksultanov1@gmail.com" ? (
          <Box>
            <MenuItem
              onClick={() => {
                navigate("/vievQuestion");
              }}>
              Все вопросы
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/addquesion");
              }}>
              Добавить вопрос
            </MenuItem>

            <Button color="warning">разгадано слов {point}</Button>
          </Box>
        ) : (
          ""
        )}
      </Menu>
    </div>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signInWithGoole } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

export default function BasicMenu({ theme, setTheme }) {
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function logOut() {
    localStorage.clear();
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

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <MenuIcon />
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
              signInWithGoole();
            }}>
            Войти
          </MenuItem>
        )}

        <MenuItem
          onClick={() => {
            navigate("/my-profile");
          }}>
          Мой Аккаунт
        </MenuItem>

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
          </Box>
        ) : (
          ""
        )}
      </Menu>
    </div>
  );
}

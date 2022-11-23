import { Button } from "@mui/material";
import React from "react";

const Profile = () => {
  const imgProfile = localStorage.getItem("profilePic");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  function logOut() {
    localStorage.clear();
  }

  return (
    <div className="blur">
      <div className="profile-block">
        <div className="profile-pic">
          <img className="pic" src={imgProfile} alt="" />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          <span className="a">{email}</span>

          <Button onClick={() => logOut()}>logOut</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

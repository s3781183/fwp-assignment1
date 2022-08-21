import React from "react";
import { useNavigate } from "react-router-dom";
import "../App";

const Profile = () => {
  const navigate = useNavigate();

  const editProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div>
      <div className="card">
        <img
          src="img.jpg"
          alt={localStorage.getItem("name")}
          style={{ width: "100%" }}
        />
        <h1>{localStorage.getItem("name")}</h1>
        Email: {localStorage.getItem("email")}
        <p></p>
        Joined: {localStorage.getItem("date")}
      </div>
      <button onClick={editProfile}>Edit Profile</button>
    </div>
  );
};
export default Profile;

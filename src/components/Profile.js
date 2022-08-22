import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App";
import "../css/Popup.css";

const Profile = () => {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopup(!popup);
  };

  const editProfile = () => {
    navigate("/edit-profile");
  };

  const deleteProfile = () => {
    localStorage.clear();
    navigate("/");
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
      <div>
        <button onClick={editProfile}>Edit Profile</button>
      </div>
      <div>
        <button onClick={togglePopup}>Delete Profile</button>
      </div>
      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="background"></div>
          <div className="popup-content">
            <div>
              <h2>Are you sure you would like to delete your account?</h2>
            </div>
            <div>
              <button className="yes-popup" onClick={deleteProfile}>
                YES
              </button>
            </div>
            <div>
              <button className="no-popup" onClick={togglePopup}>
                NO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;

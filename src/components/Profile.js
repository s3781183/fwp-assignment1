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
    localStorage.removeItem(localStorage.getItem("signedInUser"));
    navigate("/");
  };

  return (
    <div>
      <div className="card">
        <img
          src="img.jpg"
          alt={localStorage.getItem("signedInUser")}
          style={{ width: "100%" }}
        />
        <h1>
          {
            JSON.parse(
              localStorage.getItem(localStorage.getItem("signedInUser"))
            ).name
          }
        </h1>
        Email: {localStorage.getItem("signedInUser")}
        <p></p>
        Joined:{" "}
        {
          JSON.parse(localStorage.getItem(localStorage.getItem("signedInUser")))
            .date
        }
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
              <h2>Delete Account</h2>
              <h3>Confirm to delete your account</h3>
            </div>
            <div>
              <button className="confirm-popup" onClick={deleteProfile}>
                Confirm
              </button>
            </div>
            <div>
              <button className="cancel-popup" onClick={togglePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;

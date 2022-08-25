import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase";
import "../App";
import "../css/Popup.css";
import "../css/Profile.css";

function Profile({ onSignOut }) {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopup(!popup);
  };

  const editProfile = () => {
    navigate("/edit-profile");
  };

  const deleteProfile = () => {
    var existingPosts = JSON.parse(localStorage.getItem("allPosts"));
    var updatedPosts = [];
    if (existingPosts != null) {
      for (let i = 0; i < existingPosts.length; i++) {
        console.log(existingPosts);
        if (existingPosts[i].author !== localStorage.getItem("signedInUser")) {
          updatedPosts.push(existingPosts[i]);
        } else {
          let imageRef = storage(existingPosts[i].image);
          imageRef.delete();
        }
      }
      localStorage.setItem("allPosts", JSON.stringify(updatedPosts));
    }
    localStorage.removeItem("signedInUser");
    localStorage.removeItem(localStorage.getItem("signedInUser"));
    onSignOut();
    navigate("/");
  };

  return (
    <div>
      <br></br>
      <div className="card">
        <br></br>
        <h1>
          {
            JSON.parse(
              localStorage.getItem(localStorage.getItem("signedInUser"))
            ).name
          }
        </h1>
        Email: {localStorage.getItem("signedInUser")}
        <p></p>
        Joined:
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
}
export default Profile;

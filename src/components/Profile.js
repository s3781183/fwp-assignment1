import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase";
import { ref, deleteObject } from "firebase/storage";
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
          if (existingPosts[i].image !== "") {
            let imageRef = ref(storage, existingPosts[i].image);
            deleteObject(imageRef)
              .then(() => {
                console.log("picture deleted");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      }
      localStorage.setItem("allPosts", JSON.stringify(updatedPosts));
    }
    localStorage.removeItem(localStorage.getItem("signedInUser"));
    localStorage.removeItem("signedInUser");
    alert("Account successfully deleted!");
    onSignOut();
    navigate("/");
  };

  return (
    <div>
      <br></br>
      <div className="body">
        <div className="card">
          <br></br>
          {/* <img class="material-icons">account_circle</img> */}
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
          <div>
            <button className="profile" onClick={editProfile}>
              Edit Profile
            </button>
          </div>
          <div>
            <button className="profile" onClick={togglePopup}>
              Delete Profile
            </button>
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
      </div>

      </div>
  );
}
export default Profile;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navigation(props) {
  const navigate = useNavigate();

  function onSignOut() {
    navigate("/");
    props.onSignOut();
  }

  return (
    <div className="navbar">
      {props.signedInUser === null ? (
        <li className="logo">
          <Link to="/">
          <img alt="logo" src = "logo.png"/>
          </Link>
        </li>
      ) : (
        <li className="logo">
          <Link to="/post">
          <img alt="logo" src = "logo.png"/>
          </Link>
        </li>
      )}
      <div className="navbar-menu">
        {props.signedInUser === null ? (
          <>
            <li className="nav-item">
              <Link to="/sign-up">
                Sign Up
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                My Profile
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/post" className="nav-link">
                Post
              </Link>
            </li>
          </>
        )}
        </div>
        <div className = "nav-button">
          <li className = "button-link">
            {props.signedInUser === null ? (
              <Link to="/sign-in">
                Sign In
              </Link>
            ) : (
              <Link to="/" onClick={onSignOut}>
                Sign Out
              </Link>
            )
            }
          </li>
        </div>

    </div>
  );
}
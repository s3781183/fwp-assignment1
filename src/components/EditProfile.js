import React, { useState } from "react";
import "../css/Forms.css";

const EditProfile = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (
      !(
        document.getElementById("password").value ===
        document.getElementById("confirmPassword").value
      )
    ) {
      setError("Ensure passwords match.");
    } else {
      localStorage.setItem(
        "confirmPassword",
        document.getElementById("confirmPassword").value
      );
      localStorage.setItem(
        "password",
        document.getElementById("password").value
      );
      setSubmitted(true);
      setError("");
    }
  };

  const successMessage = () => {
    return (
      <div
        className="center succMsg"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <b>User {localStorage.getItem("email")} successfully edited!</b>
      </div>
    );
  };

  const onChangeConfirmPassword = (e) => {
    setSubmitted(false);
  };

  const onChangePassword = (e) => {
    setSubmitted(false);
  };
  const onChangeName = (e) => {
    localStorage.setItem("name", e.target.value);
    setSubmitted(false);
  };

  const onChangeEmail = (e) => {
    localStorage.setItem("email", e.target.value);
    setSubmitted(false);
  };

  return (
    <div className="body">
      <br />
      <br />
      {error !== "" && (
        <div className="center errorMsg">
          <p className="error">{error}</p>
        </div>
      )}
      {successMessage()}
      <form className="forms" onSubmit={handleSubmit}>
        <div>
          <h1>Edit Profile</h1>
        </div>
        <label className="label"> Name </label>
        <br />
        <input
          className="auth-form"
          type="text"
          required="required"
          placeholder="name"
          defaultValue={localStorage.getItem("name")}
          onChange={onChangeName}
        />
        <br />
        <label className="label">Email </label>
        <br />
        <input
          className="auth-form"
          type="email"
          required="required"
          defaultValue={localStorage.getItem("email")}
          onChange={onChangeEmail}
          placeholder="email"
        />
        <br />
        <label className="label">Password </label>
        <br />
        <input
          id="password"
          className="auth-form"
          type="password"
          required="required"
          placeholder="password"
          defaultValue={localStorage.getItem("password")}
          onChange={onChangePassword}
        />
        <br />
        <label className="label">Confirm Password </label>
        <br />
        <input
          id="confirmPassword"
          className="auth-form"
          type="password"
          required="required"
          placeholder="confirm password"
          defaultValue={localStorage.getItem("password")}
          onChange={onChangeConfirmPassword}
        />
        <button className="auth-form" type="submit">
          Submit Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

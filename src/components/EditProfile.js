import React, { useState } from "react";
import "../css/Forms.css";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!(password === confirmPassword)) {
      setError("Ensure passwords match.");
    } else {
      var user = {
        email: email,
        name: name,
        date: JSON.parse(
          localStorage.getItem(localStorage.getItem("signedInUser"))
        ).date,
        password: password,
      };
      var json = JSON.stringify(user);
      localStorage.setItem("signedInUser", email);
      localStorage.setItem(email, json);
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
        <b>
          User{" "}
          {
            JSON.parse(
              localStorage.getItem(localStorage.getItem("signedInUser"))
            ).email
          }
          Successfully edited!
        </b>
      </div>
    );
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
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
          defaultValue={
            JSON.parse(
              localStorage.getItem(localStorage.getItem("signedInUser"))
            ).name
          }
          onChange={onChangeName}
        />
        <br />
        <label className="label">Email </label>
        <br />
        <input
          className="auth-form"
          type="email"
          required="required"
          defaultValue={localStorage.getItem("signedInUser")}
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
          defaultValue={
            JSON.parse(
              localStorage.getItem(localStorage.getItem("signedInUser"))
            ).password
          }
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
          defaultValue={
            JSON.parse(
              localStorage.getItem(localStorage.getItem("signedInUser"))
            ).password
          }
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

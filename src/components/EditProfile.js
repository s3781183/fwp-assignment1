import React, { useState } from "react";
import "../css/Forms.css";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [date, setDate] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!(confirmPassword === password)) {
      setError("Ensure passwords match.");
    } else {
      setSubmitted(true);
      setError("");
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      console.log("date:" + localStorage.getItem("date"));
    }
  };
  // function getCurrentDate() {
  //   setDate(new Date.toISOString().slice(0, 10));
  // }

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {email} successfully edited!!</h1>
      </div>
    );
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  function onChangeEmail(e) {
    setEmail(e.target.value);
    setSubmitted(false);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
    setSubmitted(false);
  }

  //   function getData() {
  //     console.log("email:" + localStorage.getItem("email"));
  //     console.log("password:" + localStorage.getItem("password"));
  //   }

  return (
    <div className="body">
      <br />
      <br />
      {error !== "" && <p className="error">{error}</p>}
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

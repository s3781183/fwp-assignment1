import React, { useState } from "react";
import moment from "moment";
// import "../css/SignUp.css";
import "../css/Forms.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date] = useState(moment(new Date()).format("LL"));

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!(confirmPassword === password)) {
      setError("Ensure passwords match.");
    } else if (password.length < 8) {
    } else {
      setError("");
      var user = {
        email: email,
        name: name,
        date: date,
        password: password,
      };

      var json = JSON.stringify(user);
      localStorage.setItem(email, json);
      // console.log(localStorage.getItem("ss@ss"));
      // console.log(JSON.parse(localStorage.getItem("ss@ss")).date);
      // console.log(myObj.email);
      setSubmitted(true);
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
        <b>User {email} successfully registered!</b>
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
          <h1>Sign Up</h1>
        </div>
        <label className="label"> Name </label>
        <br />
        <input
          className="auth-form"
          type="text"
          required="required"
          placeholder="name"
          value={name}
          onChange={onChangeName}
        />
        <br />
        <label className="label">Email </label>
        <br />
        <input
          className="auth-form"
          type="email"
          required="required"
          value={email}
          onChange={onChangeEmail}
          placeholder="email"
        />
        <br />
        <label className="label">Password (min 8 characters) </label>
        <br />
        <input
          className="auth-form"
          type="password"
          minLength="8"
          required="required"
          placeholder="password"
          value={password}
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
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />
        <button className="auth-form" type="submit">
          Submit
        </button>
        <div className="center">
          <p>
            Already have an account? <a href="/sign-in">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

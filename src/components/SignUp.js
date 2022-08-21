import React, { useState } from "react";
import moment from "moment";
// import "../css/SignUp.css";
import "../css/Forms.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!(confirmPassword === password)) {
      setError("Ensure passwords match.");
    } else {
      setSubmitted(true);
      setError("");
      getCurrentDate();
      localStorage.setItem("date", date);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      console.log("date:" + localStorage.getItem("date"));
    }
  };
  const getCurrentDate = () => {
    const today = new Date();
    setDate(moment(today).format("LL"));
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
        <label className="label">Password </label>
        <br />
        <input
          className="auth-form"
          type="password"
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

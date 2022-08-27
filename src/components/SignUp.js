import React, { useState } from "react";
import moment from "moment";
import "../css/Forms.css";

const SignUp = () => {
  //instantiate current user's name
  const [name, setName] = useState("");
  //instantiate current user's email
  const [email, setEmail] = useState("");
  //instantiate current user's password
  const [password, setPassword] = useState("");
  //instantiate current user's confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  //instantiate current user's joined date
  const [date] = useState(moment(new Date()).format("LL"));

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //error handling
    setError("");
    if (!(confirmPassword === password)) {
      setError("Ensure passwords match.");
    } else if (password.length < 8) {
    } else {
      setError("");
      //create user object with details
      var user = {
        email: email,
        name: name,
        date: date,
        password: password,
      };
      //converts javascript value (user) to json string
      var json = JSON.stringify(user);
      localStorage.setItem(email, json);
      setSubmitted(true);
      console.log(user);
    }
  };

  const successMessage = () => {
    
    return (
      <div className="center">
        <div className="center succMsg"
          style={{
            //display successs message only when signup completed/submitted
          display: submitted ? "" : "none",
          }}
          >
          <b>User {email} successfully registered!</b>
        </div>
      </div>
    );
  };

  //called every time confirmPassword field changed
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  //called every time name field changed
  const onChangeName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  //called every time email field changed
  function onChangeEmail(e) {
    setEmail(e.target.value);
    setSubmitted(false);
  }


  //called every time password field changed
  function onChangePassword(e) {
    setPassword(e.target.value);
    setSubmitted(false);
  }

  return (
    <div className="body">
      <br />
      <br />
      {error !== "" && (
        <div className="center">
          <div className="errorMsg">
            <p className="error">{error}</p>
          </div>
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

import React, { useState } from "react";
import "../css/SignUp.css";
import "../css/Forms.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!(confirmPassword === password)) {
      setError("Ensure passwords match.");
    } else {
      setSubmitted(true);
      setError('');
      getCurrentDate();
      localStorage.setItem("date", date);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      //console.log("date:" + localStorage.getItem("date"));
    }
  };
  function getCurrentDate() {
    setDate(new Date());
  }

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {email} successfully registered!!</h1>
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
    <div class="body">
      <br/>
      <br/>
        {error !== '' && (
         <div className="center errorMsg">
           <p class="error">{error}</p>
         </div>)}
        {successMessage()}
      <form class="forms" onSubmit={handleSubmit}>
        <div>
          <h1>Sign Up</h1>
        </div>
          <label className="label" for="name"> Name </label>
          <br/>
          <input className="auth-form"
            type="text"
            required="required"
            placeholder="Name"
            value={name}
            onChange={onChangeName}
          />
          <br/>
          <label className="label" for="email">Email </label>
          <br/>
          <input className="auth-form"
            type="email"
            required="required"
            value={email}
            onChange={onChangeEmail}
            placeholder="Email"
          />
          <br/>
          <label className="label"for="password">Password </label>
          <br/>
          <input className="auth-form"
            type="password"
            required="required"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <br/>
          <label className="label" for="confirmPassword">Confirm Password </label>
          <br/>
          <input className="auth-form"
            type="password"
            required="required"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
          <button className="auth-form" type="submit">
            Submit
          </button>
        <div class="center">
          <p>
            Already have an account? <a href="/sign-in">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

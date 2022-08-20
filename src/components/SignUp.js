import React, { useState } from "react";
import "../css/SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(confirmPassword === password)) {
      setError("Ensure passwords match");
    } else {
      setSubmitted(true);
      setError(false);
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

  //   function getData() {
  //     console.log("email:" + localStorage.getItem("email"));
  //     console.log("password:" + localStorage.getItem("password"));
  //   }

  return (
    <div class="container">
      <div className="messages">
        {error && <div className="error"> {error} </div>}
        {successMessage()}
      </div>
      <form class="modal-content" onSubmit={handleSubmit}>
        <div>
          <label for="name"> Name </label>
          <input
            type="text"
            name=""
            required="required"
            className="form__input"
            placeholder="Name"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="email">
          <label for="email">Email </label>
          <input
            type="email"
            required="required"
            value={email}
            onChange={onChangeEmail}
            placeholder="Email"
          />
        </div>
        <div>
          <label for="password">Password </label>
          <input
            type="password"
            required="required"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password </label>
          <input
            type="password"
            required="required"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </div>
        <div class="footer">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
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

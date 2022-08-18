import React, { useState } from "react";
import "./css/SignUp.css";

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
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else if (!email.match(/.+@+/)) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      getCurrentDate();
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      console.log("date:" + localStorage.getItem("date"));
    }
  };
  function getCurrentDate() {
    setDate(new Date.toISOString().slice(0, 10));
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

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h2>Please enter all the fields</h2>
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
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        <div>
          <label for="lastName"> Name </label>
          <input
            type="text"
            name=""
            className="form__input"
            placeholder="LastName"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="email">
          <label for="email">email </label>
          <input
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="email"
          />
        </div>
        <div>
          <label for="password">Password </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div class="footer">
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

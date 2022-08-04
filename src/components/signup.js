import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else if (!(confirmPassword === password)) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      localStorage.setItem("name", name);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {username} successfully registered!!</h1>
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

  function onChangeUsername(e) {
    setUsername(e.target.value);
    setSubmitted(false);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
    setSubmitted(false);
  }

  //   function getData() {
  //     console.log("username:" + localStorage.getItem("username"));
  //     console.log("password:" + localStorage.getItem("password"));
  //   }

  return (
    <div classname="form">
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <div className="username">
        <label for="username">username </label>
        <input
          type="text"
          value={username}
          onChange={onChangeUsername}
          placeholder="Username"
        />
      </div>
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
      <div>
        <label for="password">Password </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password </label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />
      </div>
      <div class="footer">
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        {/* <button type="button" onClick={getData}>
          Get Data
        </button> */}
      </div>
    </div>
  );
};

export default SignUp;

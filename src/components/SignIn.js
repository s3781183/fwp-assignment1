import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Forms.css";
import "../css/styles.css";

function SignIn({ onSignIn }) {
  document.title="LAN | Sign In";
  //instantiate email used for login
  const [email, setEmail] = useState("");
  //instantiate password used for login
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    setError("");
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(email)));
    //if user doesn't exist
    if (JSON.parse(localStorage.getItem(email)) === null) {
      setError("Sign in failed. Please try again.");
    }
    //if user exists, check if credentials correct
    else if (
      JSON.parse(localStorage.getItem(email)).email === email &&
      JSON.parse(localStorage.getItem(email)).password === password
    ) {
      //save email as SignedInUser
      onSignIn(email);
      navigate("/profile");
    } else {

      setError("Sign in failed. Please try again.");
    }
  }

  return (
    <div className="body">
      <br />
      <br />

      {/** Display error message if error mesage has been set*/}

      {error !== "" && (
        <div className="center">
          <div className="errorMsg">
            <p className="error">{error}</p>
          </div>
        </div>
      )}
      <form className="forms" onSubmit={onSubmit}>
        <div>
          <h1>Sign In</h1>
        </div>
        <label className="label">Email</label>
        <br />
        <input
          className="auth-form"
          type="email"
          name="email"
          placeholder="john@example.com"
          value={email}
          onChange={onChangeEmail}
          required
        />
        <br />
        <label className="label">Password</label>
        <br />
        <input
          className="auth-form"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <button className="auth-form" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;

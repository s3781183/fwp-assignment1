import React, { useState } from "react";
import "../css/Forms.css";

const EditProfile = () => {
  //instantiate name with current user's name
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem(localStorage.getItem("signedInUser"))).name
  );
  //instantiate email with current user's email
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem(localStorage.getItem("signedInUser"))).email
  );
   //instantiate password with current user's password 
  const [password, setPassword] = useState(
    JSON.parse(localStorage.getItem(localStorage.getItem("signedInUser")))
      .password
  );

  //instantiate confirmPassword with current user's password
  const [confirmPassword, setConfirmPassword] = useState(
    JSON.parse(localStorage.getItem(localStorage.getItem("signedInUser")))
      .password
  );
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    //error handling to confirm passwords are the same. 
    if (!(password === confirmPassword)) {
      setError("Ensure passwords match.");
    } else {
      //creates new user object with updated details
      var user = {
        email: email,
        name: name,
        date: JSON.parse(
          localStorage.getItem(localStorage.getItem("signedInUser"))
        ).date,
        password: password,
      };
      console.log(user);
      //converts javascript value (user) to json string
      var json = JSON.stringify(user);
      //updates signedIn user
      localStorage.setItem("signedInUser", email);
      localStorage.setItem(email, json);
      setSubmitted(true);
      setError("");
    }
  };

  const successMessage = () => {
    return (
      <div className="center">
        <div
          className="succMsg"
          style={{
            //if submitted display success message
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
          <br/>
            successfully edited!
          </b>
        </div> 
      </div>

    );
  };

  //called every time confirmPassword field changed
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  //called every time password field changed
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  //called every time name field changed
  const onChangeName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  //called every time email field changed
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

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
          <h1>Edit Profile</h1>
        </div>
        <label className="label"> Name </label>
        <br />
        <input
          id="name"
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
          id="email"
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

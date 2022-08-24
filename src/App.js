import "./App.css";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import EditProfile from "./components/EditProfile";
import Post from "./components/Post";

function App() {
  const [signedInUser, setSignedInUser] = useState(
    localStorage.getItem("signedInUser")
  );
  //const navigate = useNavigate();

  const onSignIn = (email) => {
    setSignedInUser(email);
    localStorage.setItem("signedInUser", email);
  };

  const onSignOut = () => {
    //navigate('/', {replace:true});
    setSignedInUser(null);
    localStorage.removeItem("signedInUser");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar signedInUser={signedInUser} onSignOut={onSignOut} />
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/profile"
              element={<Profile onSignOut={onSignOut} />}
            />
            <Route path="/sign-in" element={<SignIn onSignIn={onSignIn} />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

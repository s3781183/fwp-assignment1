import "./App.css";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";
import React, {useState} from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";

function App() {
  const [signedInUser, setSignedInUser] = useState(null);
  //const navigate = useNavigate();

  const onSignIn = email => {
    setSignedInUser(email);


  };

  const onSignOut = () => {
    //navigate('/', {replace:true});
    setSignedInUser(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar signedInUser={signedInUser} onSignOut = {onSignOut}/>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/sign-in' element={<SignIn onSignIn={onSignIn}/>} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

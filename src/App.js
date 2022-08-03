import './App.css';
import Navbar from "./fragments/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
      <Navbar />
          <div>
            <Routes>
              <Route path="/signup" element={<SignUp/>} />
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;


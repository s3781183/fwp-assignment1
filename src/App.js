import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
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


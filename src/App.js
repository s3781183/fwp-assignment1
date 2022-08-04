import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Landing from'./components/Landing';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

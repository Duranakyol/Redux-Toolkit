import Login from "./Login";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountPage from "./CountPage";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/countpage" element={<CountPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

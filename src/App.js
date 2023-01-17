import Login from "./Login";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountPage from "./CountPage";
import MyNavbar from "./Navbar";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/countpage" element={<CountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

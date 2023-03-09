import Login from "./pages/Login";
import MyNavbar from "./pages/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountPage from "./pages/CountPage";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Documentation from "./components/Documentation";
import GettingStarted from "./components/GettingStarted";
import TutorialsOverview from "./components/TutorialsOverview";
import QuickStart from "./components/QuickStart";
import TypeScript from "./components/TypeScript";
import RtkQuery from "./components/RtkQuery";

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/countpage" element={<CountPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/gettingStarted" element={<GettingStarted />} />
          <Route path="/tutorialsoverview" element={<TutorialsOverview />} />
          <Route path="/quickstart" element={<QuickStart />} />
          <Route path="/typescript" element={<TypeScript />} />
          <Route path="/rtkquery" element={<RtkQuery />} />
          <Route path="/gettingStarted" element={<GettingStarted />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

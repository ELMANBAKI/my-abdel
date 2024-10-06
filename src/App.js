import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Main from './Main'; // تأكد من وجود هذا المكون

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;

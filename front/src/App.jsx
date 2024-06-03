import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing";
import Home from "./views/Home";
import FooterLanding from "./components/FooterLanding/FooterLanding";
import MisTurnos from "./views/MisTurnos";
import Register from "./views/Register";
import About from "./views/About";
import Contact from "./views/Contact";
import TurnModal from "./views/TurnModal";

function App() {
  const [isLanding, setIsLanding] = useState();
  const location = useLocation();

  useEffect(() => {
    setIsLanding(location.pathname === "/");
  }, [location.pathname]);

  return (
    <div>
      <NavBar isLanding={isLanding} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/turns" element={<MisTurnos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newturn" element={<TurnModal />} />
      </Routes>
      <FooterLanding isLanding={isLanding} />
    </div>
  );
}

export default App;

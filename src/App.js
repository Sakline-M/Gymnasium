import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Facilities from "./pages/Facilities/Facilities";
import Services from "./pages/Services/Services";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Ad from "./components/Ad/Ad";
import "./pages/shared/style.css";

function App() {
  // all state
  const [ad, setAdd] = useState(false);

  // timeout
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAdd(true);
  //   }, 2500);
  // }, []);
  return (
    <motion.div
      data-theme="dark"
      className="relative max-w-sm md:max-w-screen-2xl text-white">
      <div className={`${ad ? "block" : "hidden"}`}>
        <Ad setAdd={setAdd}></Ad>
      </div>
      <div className={`${ad ? "hidden" : "block"} `}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </motion.div>
  );
}

export default App;

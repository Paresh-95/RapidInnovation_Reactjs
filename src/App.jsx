import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import Footer from "./components/Footer";
import Github from "./pages/Github"

import WebSocketClient from "./pages/WebSocketClient";
import "./App.css";

function App() {
  return (
    <>
      <div>
       <Navbar />
        <div className="container mx-auto ">    
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/github" element={<Github />}></Route>
            <Route path="/webSocket" element={<WebSocketClient />}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer";
import Task from "./pages/Task"
import { useContext } from "react";
import WebSocketClient from "./pages/WebSocketClient";
import { ThemeContext } from "./Context/ThemeContext";
import "./App.css";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={theme==='light'?'bg-white text-black':'bg-[#252525] text-white'}>
       <Navbar />
        <div className='container mx-auto'>    
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/task" element={<Task />}></Route>
            <Route path="/webSocket" element={<WebSocketClient />}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;

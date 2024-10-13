import React, { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import { IoSunny,IoMoon } from "react-icons/io5"
import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {theme,toggleTheme} = useContext(ThemeContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" text-lg  py-3  shadow-xl">
        <div className="container flex flex-row justify-between items-center mx-auto">
          <div>
            <NavLink to="/">
              <img src="/rapidLogo.svg" width={140} alt="Logo" />
            </NavLink>
          </div>

          <div className="md:hidden flex gap-4">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none " 
            >
              {isOpen ? "✖" : "☰"}
            </button>
            <button className="mx-4" onClick={toggleTheme} >{theme === 'light'?<IoMoon size={25}/>:<IoSunny size={25}/>}</button>
          </div>

          <div className="hidden md:flex flex-row gap-10 items-center">
            <ul className="flex flex-row gap-10">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-violet-600 font-bold"
                      : "hover:text-violet-500"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-violet-600 font-bold"
                      : "hover:text-violet-500"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-violet-600 font-bold"
                      : "hover:text-violet-500"
                  }
                  to="/task"
                >
                  Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-violet-600 font-bold"
                      : "hover:text-violet-500"
                  }
                  to="/webSocket"
                >
                  WebSocketClient
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex gap-10">
          <NavLink to="/contact">
            <button className="bg-gradient-to-r from-[#FEAB06] to-[#FD9904] py-2 px-6 font-bold rounded-lg">
              Contact Us
            </button>
            </NavLink>
            <button onClick={toggleTheme} >{theme === 'light'?<IoMoon size={30}/>:<IoSunny size={30}/>}</button>
          </div>
         
        </div>

        <div
          className={`md:hidden absolute left-0 top-16 w-full bg-gray-900 transition-transform duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } z-10 shadow-lg`}
        >
          <ul className="flex flex-col gap-6 p-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-600 font-bold"
                    : "hover:text-violet-500"
                }
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-600 font-bold"
                    : "hover:text-violet-500"
                }
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-600 font-bold"
                    : "hover:text-violet-500"
                }
                to="/task"
                onClick={() => setIsOpen(false)}
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-600 font-bold"
                    : "hover:text-violet-500"
                }
                to="/webSocket"
                onClick={() => setIsOpen(false)}
              >
                WebSocketClient
              </NavLink>
            </li>

            <li className="pt-4">
              <NavLink to="/contact">
                <button  onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-[#FEAB06] to-[#FD9904] py-2 px-6 font-bold w-full rounded-lg">
                  Contact Us
                </button>
              </NavLink>
            </li>  
          </ul>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;

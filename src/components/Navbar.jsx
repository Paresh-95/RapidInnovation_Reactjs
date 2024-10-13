import React, { useState } from "react";
import {  NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white text-lg text-black py-3 border-b-2 bordern-black shadow-lg">
        <div className="w-10/12 flex flex-row justify-between items-center mx-auto">
          <div>
            <NavLink to="/">
              <img src="/rapidLogo.svg" width={140} alt="Logo" />
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
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
                  to="/github"
                >
                  Github
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

          <div className="hidden md:block">
          <NavLink to="/contact">
            <button className="bg-gradient-to-r from-[#FEAB06] to-[#FD9904] py-2 px-6 font-bold rounded-lg">
              Contact Us
            </button>
            </NavLink>
          </div>
        </div>

        <div
          className={`md:hidden absolute left-0 top-16 w-full bg-white transition-transform duration-300 ease-in-out ${
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
                to="/github"
                onClick={() => setIsOpen(false)}
              >
                Github
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
                <button className="bg-gradient-to-r from-[#FEAB06] to-[#FD9904] py-2 px-6 font-bold w-full rounded-lg">
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

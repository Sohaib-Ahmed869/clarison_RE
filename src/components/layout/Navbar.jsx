import React, { useState } from "react";
import Logo from "../../assets/sidebar/sidebar-logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const buttonText =
    location.pathname === "/auth/login"
      ? "Sign Up"
      : location.pathname === "/auth/signup"
      ? "Login"
      : "";

  const handleButtonClick = () => {
    if (location.pathname === "/auth/login") {
      navigate("/auth/signup");
    } else if (location.pathname === "/auth/signup") {
      navigate("/auth/login");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-20 w-5/6 rounded-2xl shadow-[0px_5px_20px_#dedede] mx-auto flex items-center justify-between px-10">
      <div>
        <img className="w-3/5 2xl:w-full" src={Logo} alt="logo" />
      </div>
      <div className="lg:flex items-center justify-center gap-10 2xl:gap-20 hidden">
        <ul className="text-gray-800 flex gap-6 2xl:gap-14 font-semibold 2xl:text-lg">
          <NavLink to="/dashboard">
            <li>Home</li>
          </NavLink>
          <NavLink to="/account-setting/pricing-structure">
            <li>Pricing</li>
          </NavLink>
          <NavLink>
            <li>Receive eBlasts</li>
          </NavLink>
          <NavLink>
            <li>Resources</li>
          </NavLink>
        </ul>
        <button
          className="w-28 hover:bg-opacity-80 py-3 rounded-full bg-primary text-white"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="w-5 md:w-8 h-5 md:h-8 text-gray-800" />
          ) : (
            <FaBars className="w-5 md:w-8 h-5 md:h-8 text-gray-800" />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className={`absolute top-0 left-0 w-full bg-white shadow-lg lg:hidden flex flex-col items-center py-24 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-[20%] right-[14%] lg:top-4 lg:right-4"
          >
            <FaTimes className="w-5 md:w-8 h-5 md:h-8 text-gray-800" />
          </button>
          <ul className="text-gray-800 flex flex-col items-center gap-4 font-semibold text-lg">
            <NavLink to="/dashboard">
              <li>Home</li>
            </NavLink>
            <NavLink to="/account-setting/pricing-structure">
              <li>Pricing</li>
            </NavLink>
            <NavLink>
              <li>Receive eBlasts</li>
            </NavLink>
            <NavLink>
              <li>Resources</li>
            </NavLink>
          </ul>
          <button
            className="w-28 hover:bg-opacity-80 py-3 rounded-full bg-primary text-white mx-auto my-4"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
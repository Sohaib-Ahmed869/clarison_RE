import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../assets/sidebar/dashboard.png";
import image2 from "../../assets/sidebar/create-send-flyer.png";
import image3 from "../../assets/sidebar/my-schedule-flyer.png";
import image4 from "../../assets/sidebar/my-targeted-audience.png";
import image5 from "../../assets/sidebar/my-saved-work.png";
import image6 from "../../assets/sidebar/clarison-support.png";
import image7 from "../../assets/sidebar/account-setting.png";
import logo from "../../assets/sidebar/sidebar-logo.png";
import { ImCross } from "react-icons/im";
import { FiSettings } from "react-icons/fi";

const SideBar = ({ open, handleToggle }) => {
  const [isAccountSettingsActive, setIsAccountSettingsActive] = useState(false);

  const handleAccountClick = (isActive) => {
    setIsAccountSettingsActive(isActive);
  };

  return (
    <div className={`w-full p-4 h-screen bg-[url('/src/assets/sidebar/sidebar-image.png')] z-50 bg-cover bg-center`}>
      {/* Logo Image */}
      <div className="flex w-full items-center justify-between">
        <img src={logo} className="w-44 lg:w-56 pl-5 py-5 lg:py-5" alt="logo" />
        {open && <ImCross onClick={handleToggle} className="text-gray-800 text-2xl z-40 lg:hidden" />}
      </div>

      {/* Dashboard Link */}
      <NavLink onClick={handleToggle} to="/user/dashboard">
        {({ isActive }) => (
          <div onClick={setIsAccountSettingsActive(false)} className={`flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300 ${isActive ? "bg-secondary text-white" : "text-[#737791]"}`}>
            <img src={image1} alt="Dashboard" className={`w-5 h-5 ${isActive ? "filter brightness-0 invert" : ""}`} />
            <h1 className="ml-3">Dashboard</h1>
          </div>
        )}
      </NavLink>

      {/* Create & Send Flyer Link */}
      <NavLink onClick={handleToggle} to="/user/create-send-flyer/dashboard">
        {({ isActive }) => (
          <div onClick={setIsAccountSettingsActive(false)} className={`flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300 ${isActive ? "bg-secondary text-white" : "text-[#737791]"}`}>
            <img src={image2} alt="Create & Send Flyer" className={`w-5 h-5 ${isActive ? "filter brightness-0 invert" : ""}`} />
            <h1 className="ml-3">Create & Send Flyer</h1>
          </div>
        )}
      </NavLink>

      {/* My Schedule Flyer Link */}
      <NavLink onClick={handleToggle} to="/user/my-schedule-flyer">
        {({ isActive }) => (
          <div onClick={setIsAccountSettingsActive(false)} className={`flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300 ${isActive ? "bg-secondary text-white" : "text-[#737791]"}`}>
            <img src={image3} alt="My Schedule" className={`w-5 h-5 ${isActive ? "filter brightness-0 invert" : ""}`} />
            <h1 className="ml-3">My Schedule Flyer</h1>
          </div>
        )}
      </NavLink>

      {/* My Targeted Audience Link */}
      <NavLink onClick={handleToggle} to="/user/my-targeted-audience">
        {({ isActive }) => (
          <div onClick={setIsAccountSettingsActive(false)} className={`flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300 ${isActive ? "bg-secondary text-white" : "text-[#737791]"}`}>
            <img src={image4} alt="My Targeted Audience" className={`w-5 h-5 ${isActive ? "filter brightness-0 invert" : ""}`} />
            <h1 className="ml-3">My Targeted Audience</h1>
          </div>
        )}
      </NavLink>

      {/* My Saved Work Link */}
      <NavLink onClick={handleToggle} to="/user/my-saved-work">
        {({ isActive }) => (
          <div onClick={setIsAccountSettingsActive(false)} className={`flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300 ${isActive ? "bg-secondary text-white" : "text-[#737791]"}`}>
            <img src={image5} alt="My Saved Work" className={`w-5 h-5 ${isActive ? "filter brightness-0 invert" : ""}`} />
            <h1 className="ml-3">My Saved Work</h1>
          </div>
        )}
      </NavLink>

      {/* ClarisonRE Support Link */}
      <NavLink onClick={handleToggle} to="/user/clarison-support">
        {({ isActive }) => (
          <div onClick={setIsAccountSettingsActive(false)} className={`flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300 ${isActive ? "bg-secondary text-white" : "text-[#737791]"}`}>
            <img src={image6} alt="ClarisonRE Support" className={`w-5 h-5 ${isActive ? "filter brightness-0 invert" : ""}`} />
            <h1 className="ml-3">ClarisonRE Support</h1>
          </div>
        )}
      </NavLink>

      {/* Account Setting with Sub-Menu */}
      <NavLink
        to="/user/account-setting"
        onClick={() => handleAccountClick(!isAccountSettingsActive)}
      >
        {({ isActive }) => {
          return (
            <>
              <div className={`flex items-center px-4 py-4 my-2 rounded-2xl w-full transition-colors duration-300 ${isActive ? "bg-secondary text-white" : "text-[#737791]"}`}>
                <FiSettings className="w-5 h-5" />
                <h1 className="ml-3">Account Setting</h1>
              </div>
              {(isActive || isAccountSettingsActive) && (
                <ul className="ml-8 mt-2 text-[#737791] space-y-2">
                  <li>
                      <NavLink
                        to="/user/account-setting/my-agents"
                        onClick={handleToggle}
                        className={({ isActive }) =>
                          `flex items-center space-x-2 ${isActive ? "text-blue-600" : "text-[#737791]"}`
                        }
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>My Agents</span>
                      </NavLink>
                    </li>
                  <li>
                    <NavLink
                      to="/user/account-setting/company-profile"
                      onClick={handleToggle}
                      className={({ isActive }) => `flex items-center space-x-2 ${isActive ? "text-blue-600" : "text-[#737791]"}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>Company Info</span>
                    </NavLink>
                  </li>
                  <li>
                      <NavLink
                        to="/user/account-setting/my-subscriptions"
                        onClick={handleToggle}
                        className={({ isActive }) =>
                          `flex items-center space-x-2 ${isActive ? "text-blue-600" : "text-[#737791]"}`
                        }
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>My Subscriptions</span>
                      </NavLink>
                    </li>
                </ul>
              )}

            </>
          );
        }}
      </NavLink>
    
    </div>
  );
};

export default SideBar;

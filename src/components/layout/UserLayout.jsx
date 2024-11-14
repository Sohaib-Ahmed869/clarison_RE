import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative flex h-full w-full">
      {/* Overlay that covers all content except the sidebar when open */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleToggle}
        ></div>
      )}

      {/* Sidebar - adjust z-index so it appears above the overlay */}
      <div
        className={`fixed top-0 left-0 sm:w-96  h-full bg-white transition-transform duration-300 transform z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block`}
      >
        {sidebarOpen ? (
          <SideBar open={sidebarOpen} handleToggle={handleToggle} />
        ) : (
          <SideBar />
        )}
      </div>

      {/* Main content area with lower z-index than overlay */}
      <div className="flex flex-col min-h-screen w-full lg:w-3/4  xl:w-full bg-[#fafbfd] relative z-30">
        <div className="flex w-full h-20 bg-white">
          {/* Hamburger menu for toggling the sidebar */}
          <GiHamburgerMenu
            onClick={handleToggle}
            className={`text-gray-800 text-2xl  z-40 lg:hidden ${
              sidebarOpen ? "hidden" : "block"
            }`}
          />
          <Header />
        </div>
        <div className="h-full w-full pb-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;

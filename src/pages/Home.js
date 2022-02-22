import React from "react";

import NavBarSmall from "../components/NavBarSmall";
import SideBar from "../components/SideBar";
import HamburgerMenu from "../components/HamburgerMenu";
import MiddleBar from "../components/MiddleBar";
import MainContent from "../components/MainContent";

import { useState } from "react";

import { ChevronLeftIcon } from "@heroicons/react/solid";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <HamburgerMenu
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <SideBar />
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        {/* Top Nav bar for mobile view */}
        <NavBarSmall setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Breadcrumb */}
            <nav
              className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
              aria-label="Breadcrumb"
            >
              <a
                href="#"
                className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
              >
                <ChevronLeftIcon
                  className="-ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Directory</span>
              </a>
            </nav>

            {/* Main content screen */}
            <MainContent />
          </main>
          {/* Search bar & Diectory List */}
          <MiddleBar />
        </div>
      </div>
    </div>
  );
};

export default Home;

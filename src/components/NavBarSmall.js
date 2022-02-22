//small navbar with burger menu

import React from "react";

import { NavLink } from "react-router-dom";

import { MenuIcon } from "@heroicons/react/outline";

const NavBarSmall = ({ setSidebarOpen }) => {
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
        <div>
          <NavLink to="/signup">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-pink-500.svg"
              alt="Workflow"
            />
          </NavLink>
        </div>
        <div>
          <button
            type="button"
            className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBarSmall;

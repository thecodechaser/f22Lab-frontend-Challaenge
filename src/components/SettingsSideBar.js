import React from "react";
import {useNavigate } from "react-router";

import {
  CogIcon,
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  DocumentSearchIcon,
  ChatIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/outline";

const user = {
  name: "Tom Cook",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "Jobs", href: "#", icon: BriefcaseIcon, current: false },
  { name: "Applications", href: "#", icon: DocumentSearchIcon, current: false },
  { name: "Messages", href: "#", icon: ChatIcon, current: false },
  { name: "Team", href: "#", icon: UserGroupIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: true },
];
const secondaryNavigation = [
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Logout", href: "#", icon: CogIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SettingsSideBar = () => {
  const navigate= useNavigate();
  return (
    <div className="flex flex-col w-64">
      <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
        <div className="flex-1 flex flex-col pt-0 pb-4 overflow-y-auto">
          <nav className="mt-3 flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-purple-100 text-purple-600 border-l-4 border-purple-500"
                      : "text-gray-600 hover:bg-purple-100 hover:text-purple-600",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={()=> item.name == "Home" && ( navigate('/home'))}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-purple-500"
                        : "text-gray-400 group-hover:text-purple-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 pb-4">
          <div className="flex-1 px-2 space-y-1">
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="text-gray-600 hover:bg-purple-50 hover:text-purple-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <item.icon
                    className="text-gray-400 group-hover:text-purple-500 mr-3 flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSideBar;

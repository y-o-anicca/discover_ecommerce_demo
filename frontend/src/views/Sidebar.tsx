import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      className="flex-col w-64 bg-white h-full border-r"
      style={{ minHeight: "calc(100vh - 59px)" }}
    >
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-500">
                Menu
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/partners"
              className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 hover:border-indigo-500 pr-6 ${
                !!location.pathname.startsWith("/partners")
                  ? "border-indigo-500 font-bold"
                  : "border-transparent"
              }`}
            >
              <span className="ml-2 text-sm tracking-wide truncate">
                Partners
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/criteria"
              className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 hover:border-indigo-500 pr-6 ${
                !!location.pathname.startsWith("/criteria") ||
                location.pathname === "/"
                  ? "border-indigo-500 font-bold"
                  : "border-transparent"
              }`}
            >
              <span className="ml-2 text-sm tracking-wide truncate">
                Criteria
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 hover:border-indigo-500 pr-6 ${
                !!location.pathname.startsWith("/account")
                  ? "border-indigo-500 font-bold"
                  : "border-transparent"
              }`}
            >
              <span className="ml-2 text-sm tracking-wide truncate">
                Account
              </span>
            </Link>
          </li>
          {/* <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
              </a>
            </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

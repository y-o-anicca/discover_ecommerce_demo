import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-end justify-between px-5 py-2 bg-white border-b border-gray-200 sm:flex-row sm:items-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Discover Brands
      </h2>
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          type="button"
          className="px-4 py-2 text-gray-500 transition-colors duration-300 transform border rounded-lg hover:bg-gray-100 focus:outline-none focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
        </button>

        <button
          type="button"
          className="px-4 py-2 text-gray-500 transition-colors duration-300 transform border rounded-lg hover:bg-gray-100 focus:outline-none focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>

        <button
          type="button"
          className="px-4 py-2 text-gray-500 transition-colors duration-300 transform border rounded-lg hover:bg-gray-100 focus:outline-none focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;

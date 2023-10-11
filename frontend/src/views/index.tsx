import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative flex flex-col h-full border border-gray-200 opacity-100 overflow-hidden rounded-lg">
      <Header />
      <div
        className="min-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"
        style={{ minHeight: "calc(100vh - 59px)" }}
      >
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

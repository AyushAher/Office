import React from "react";
import SideNavBar from "./SideNavBar";
import Navbar from "./navbar";
import Footer from "./footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex relative">
      <SideNavBar />
      <div className="h-screen flex-1">
        <Navbar />

        <div className="p-7">
          <Outlet />
        </div>
        <div className="footer absolute bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;

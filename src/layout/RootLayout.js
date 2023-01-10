import React from "react";
import Navbar from "./../components/Navbar";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

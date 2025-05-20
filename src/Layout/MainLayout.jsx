import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
     <Navbar></Navbar>
          <div className="bg-[#e8faf4]">
              <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

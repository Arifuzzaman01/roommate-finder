import React from "react";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        
          <div className="flex-none lg:hidden z-10">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          {/* <div className="mx-2 flex-1 px-2">Dashboard</div> */}
          {/* <div className="hidden flex-none lg:block"> */}
          {/* <ul className="menu menu-horizontal">
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul> */}
          {/* </div> */}
        

        {/* 👇 Page Content Here */}
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu   min-h-full w-80 p-4 pt-14 z-10 border-r-2 border-gray-400">
          <li className=" ">
            <NavLink
              to="/"
              className=" font-bold !no-underline"
            >
             Home
            </NavLink>
          </li>
          <li className=" ">
            <NavLink
              
              className=" font-bold !no-underline"
            >
              My Listing
            </NavLink>
          </li>
          <li className=" ">
            <NavLink
              to="/dashboard/add-to-find"
              className=" font-bold !no-underline"
            >
              Add To Find Roommate
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;

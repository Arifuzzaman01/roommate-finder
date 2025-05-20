import React from "react";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";
import navLogo from '../assets/roommateLogo.png'

const Navbar = () => {
  const link = (
    <>
      <NavLink to="/" className="font-semibold px-2 ">
        Home
      </NavLink>
      <NavLink className="font-semibold px-2 ">Add to find Roommate</NavLink>
      <NavLink className="font-semibold px-2 ">Brows Listing</NavLink>
      <NavLink className="font-semibold px-2 ">My Listing</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-3xl lg:hidden">
            <MdMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-green-400 rounded-box z-1 mt-3 w-52 p-6 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img className="size-8" src={navLogo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn bg-green-400 font-bold ">LogIn</Link>
      </div>
    </div>
  );
};

export default Navbar;

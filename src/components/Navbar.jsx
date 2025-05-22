import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";
import navLogo from '../assets/roommateLogo.png'
import { AuthContext } from "../Layout/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext)
  // console.log(user);
  const link = (
    <>
      <NavLink to="/" className="font-semibold px-2 ">
        Home
      </NavLink>
      <NavLink to='/add-to-find' className="font-semibold px-2 ">Add to find Roommate</NavLink>
      <NavLink to='/brows-listing' className="font-semibold px-2 ">Brows Listing</NavLink>
      <NavLink to='/my-listing' className="font-semibold px-2 ">My Listing</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
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
        <div className="mx-2">
          <img className="size-10 rounded-full my-2" src={user?.photoURL && user.photoURL} alt="" />
        </div>
        <Link to='/login' className="btn bg-green-500 font-extrabold text-white ">LogIn</Link>
      </div>
    </div>
  );
};

export default Navbar;

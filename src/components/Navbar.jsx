import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";
import navLogo from "../assets/roommateLogo.png";
import { AuthContext } from "../Layout/AuthProvider";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import Swal from "sweetalert2";

const Navbar = ({ changeTheme, setChangeTheme }) => {
  const { user, userLogOut } = useContext(AuthContext);
  // console.log(user);
  const link = (
    <>
      <NavLink to="/" className="font-semibold px-2 ">
        Home
      </NavLink>

      <NavLink to="/brows-listing" className="font-semibold px-2 ">
        Brows Listing
      </NavLink>
      {user && (
        <>
          <NavLink to="/add-to-find" className="font-semibold px-2 ">
            Add to find 
          </NavLink>

          <NavLink to="/my-listing" className="font-semibold px-2 ">
            My Listing
          </NavLink>
          <NavLink to="/dashboard" className="font-semibold px-2 ">
            Dashboard
          </NavLink>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logOut Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-3xl lg:hidden"
          >
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
        <button
          onClick={() => setChangeTheme(!changeTheme)}
          className="  text-white transition"
        >
          {changeTheme ? (
            <IoSunny className="text-white size-4" />
          ) : (
            <IoMoonOutline className="text-black size-4" />
          )}
        </button>
        <div className="mx-2">
          {user && (
            <img
              className="size-10 rounded-full my-2"
              src={user?.photoURL && user.photoURL}
              alt=""
              title={user?.displayName}
            />
          )}
        </div>
        {/* <Link
          to="/login"
          className="btn bg-green-500 font-extrabold text-white "
        >
          LogIn
        </Link> */}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-green-500 font-extrabold text-white "
          >
            LogOut
          </button>
        ) : (
          <div>
            <Link
              to="/register"
              className="btn btn-outline font-extrabold mr-2 hidden md:inline-block pt-2 "
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="btn bg-green-500 font-extrabold text-white "
            >
              LogIn
            </Link>
          </div>
        )}
        {/* <button
          onClick={handleLogOut}
          className="btn bg-green-500 font-extrabold text-white "
        >
          LogOut
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  const link = (
    <>
      <NavLink to="/" className="font-semibold px-2 ">
        Home
      </NavLink>
      <NavLink to="/add-to-find" className="font-semibold px-2 ">
        Add to find Roommate
      </NavLink>
      <NavLink to="/brows-listing" className="font-semibold px-2 ">
        Brows Listing
      </NavLink>
      <NavLink to="/my-listing" className="font-semibold px-2 ">
        My Listing
      </NavLink>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10">
      <nav className="md:flex gap-3">{link}</nav>
      <nav>
        <h4>Contact Us <span>+088 01339313000</span></h4>
        <div>
          <Link to='/conditions' className="text-blue-600 underline">Terms & Conditions</Link>
        </div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://web.facebook.com/arifuzzaman.arif.98096721/?_rdc=2&_rdr#" target="blanc">
            <FaFacebookF size={24} />
          </a>
          <a href="#" >
            <FaYoutube size={24} />
          </a>
          <a href="https://github.com/arifuzzaman01" target="blanc">
            <FaGithub size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Arifuzzaman Rakib
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

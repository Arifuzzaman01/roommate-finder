import React, { useContext } from "react";


import { AuthContext } from "../Layout/AuthProvider";

import Slider from './Slider';

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" py-10 md:flex  md:flex-row gap-8 justify-end md:justify-between items-center ">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold  leading-18 ">
          Find Your Perfect Roommate <br /> Easy & Trusted Roommate
        </h1>
        <div className="border-l-4 border-green-500 py-5 ">
          <p className="text-green-800 font-bold text-xl pl-5">
            Discover compatible roommates near you with our trusted <br />{" "}
            roommate finder. Browse profiles, connect with verified <br />{" "}
            users, and find your ideal living partner today!
          </p>
        </div>
      </div>
      <Slider></Slider>
    </div>
  );
};

export default Banner;

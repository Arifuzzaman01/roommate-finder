import React, { useContext } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import { Link } from "react-router";
import profile from "../assets/cardProfile.png";
import bannerImg from "../assets/bannerBed.jpg";
import frontBannerImg from "../assets/bedRoom2.jpg";

const Hero = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="md:flex flex-col hidden md:flex-row justify-between items-center gap-20 my-5 h-[70vh] ">
      <div className="flex flex-col ">
        <h1 className="text-4xl md:text-5xl font-bold text-left ">
          Find your people. <br /> Find your place.
        </h1>
        <p className="max-w-2/3 border-t-2 font-bold">
          Room Finder connects you to other verified renters in your area that
          are looking for roommates and posting available rooms that you can't
          find anywhere else. Stop stressing and let us help you find a better
          place to live!
        </p>
      </div>
      <div className="relative ">
        <div className="card bg-base-200  w-72 text-right md:w-96 shadow-md border-white border-2">
          {/* <div className="flex gap-2">
            <img className="size-10 p-1 rounded-full" src={profile} alt="" />
            <p>Good User</p>
            <div></div>
          </div> */}
          <figure>
            <img className="max-h-60 w-full" src={bannerImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">What's to think</h2>
            <p>
              Please visit our website and find out you like your favorite
              roommate.
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/login"
                className="btn bg-green-500 font-extrabold text-white "
              >
                LogIn
              </Link>
            </div>
          </div>
        </div>
        {/* frontCard */}
        <div className="card bg-base-100 w-72 shadow-sm absolute top-8 -left-44 -rotate-12 border-white border-2">
          <div className="flex gap-2">
            <img
              className="size-10 p-1 rounded-full"
              src={user ? user?.photoURL : profile}
              alt=""
            />
            <div>
              <p>{user ? user.displayName : "no user"}</p>
              <p>{user ? user.email : "info@gmail.com"}</p>
            </div>
          </div>
          <figure>
            <img className="w-full h-52" src={frontBannerImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">What are you looking for Roommate ?</h2>
            <p className="font-bold">
              Please visit our website and find out you like your favorite
              roommate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

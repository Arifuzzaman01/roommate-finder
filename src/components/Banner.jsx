import React, { useContext } from "react";
import bannerImg from "../assets/bannerBed.jpg";
import frontBannerImg from "../assets/bedRoom2.jpg";
import profile from "../assets/cardProfile.png";
import { AuthContext } from "../Layout/AuthProvider";
import { Link } from "react-router";

const Banner = () => {
  const {user}= useContext(AuthContext)
  return (
    <div className=" py-10 flex flex-col md:flex-row gap-8 justify-end md:justify-between items-center ">
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
      <div className="relative">
        <div className="card bg-base-100 w-72 text-right md:w-96 shadow-sm">
          <div className="flex gap-2">
            <img className="size-10 p-1 rounded-full" src={profile} alt="" />
              <p>Good User</p>
            <div>
              
            </div>
          </div>
          <figure>
            <img src={bannerImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, Please visit our website and find out you like your favorite roommate. Before LogIn
            </p>
            <div className="card-actions justify-end">
              <Link to='/login' className="btn bg-green-500 font-extrabold text-white ">LogIn</Link>
            </div>
          </div>
        </div>
        {/* frontCard */}
        <div className="card bg-base-100 w-72 shadow-sm absolute top-18 -left-28 rotate-12">
           <div className="flex gap-2">
            <img className="size-10 p-1 rounded-full" src={user? user?.photoURL: profile} alt="" />
            <div>
              <p>{user? user.displayName : 'no user'}</p>
              <p>{ user? user.email: 'info@gmail.com'}</p>
            </div>
          </div>
          <figure>
            <img className="w-full h-52" src={frontBannerImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">What are you looking for Roommate ?</h2>
            <p className="font-bold">
             Please visit our website and find out you like your favorite roommate.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

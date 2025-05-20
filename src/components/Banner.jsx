import React from "react";
import bannerImg from "../assets/bannerBed.jpg";
import profile from "../assets/cardProfile.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto py-10 md:flex gap-8 justify-between items-center ">
      <div>
        <h1 className="text-5xl font-bold  leading-18 ">
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
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="flex gap-2">
            <img className="size-10 p-1 rounded-full" src={profile} alt="" />
            <div>
              <p>abc@gmail.com</p>
              <p>Name</p>
            </div>
          </div>
          <figure>
            <img src={bannerImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* frontCard */}
        <div className="card bg-base-100 w-72 shadow-sm absolute top-18 -left-28 rotate-12">
          <div className="flex gap-2">
            <img className="size-10 p-1 rounded-full" src={profile} alt="" />
            <div>
              <p>abc@gmail.com</p>
              <p>Name</p>
            </div>
          </div>
          <figure>
            <img src={bannerImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

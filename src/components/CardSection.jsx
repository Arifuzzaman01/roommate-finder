import React from "react";
import attachedBath1 from "../assets/attatchBath.jpg";
import attachedBath2 from "../assets/attatchBath2.jpg";
import singleBed from "../assets/singlebed1.jpg";
import singleBed2 from "../assets/singlebed2.jpg";
import studio1 from "../assets/StudioBed.jpg";
import studio2 from "../assets/studioBed2.jpg";
import double1 from "../assets/doubleBed.jpg";
import double2 from "../assets/doubleBed2.jpg";
import deluxe from "../assets/delauxBed.jpg";
import deluxe2 from "../assets/doubleBed3.jpg";
import { Link } from "react-router";

const CardSection = () => {
  return (
    <div className="py-10 ">
      <h1 className="text-center font-bold text-3xl underline py-7">
        Most Favorite Room Service
      </h1>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* card 1 */}
        <div className="card bg-white  shadow-md">
          <figure>
            <img className="w-full min-h-52" src={singleBed} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Single Bed</h2>
            <p className="text-gray-600">
              Single Bed For one Person .Study environment with reading table
              and chair{" "}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                Rent Amount - 12500 BDT / Month
              </div>
              <Link to="/add-to-find" className="badge badge-outline">
                Add to find
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card bg-white  shadow-md">
          <figure>
            <img className="w-full min-h-52 max-h-60" src={attachedBath1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Double Bed Deluxe</h2>
            <p className="text-gray-600">
              Double deluxe Bed with attached Bath Room.Neat and clean with
              Study environment{" "}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                Rent Amount - 15000 BDT / Month
              </div>
              <Link to="/add-to-find" className="badge badge-outline">
                Add to find
              </Link>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card bg-white  shadow-md">
          <figure>
            <img className="w-full min-h-52 max-h-60" src={studio1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Studio Room</h2>
            <p className="text-gray-600">
              Studio type room .Very neat and clean comfortable room with good
              environment{" "}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                Rent Amount - 20,000 BDT / Month
              </div>
              <Link to="/add-to-find" className="badge badge-outline">
                Add to find
              </Link>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="card bg-white  shadow-md">
          <figure>
            <img className="w-full min-h-52 max-h-60" src={double1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Double Bed Room</h2>
            <p className="text-gray-600">
              Double Bed Room .Study environment with reading table and chair{" "}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                Rent Amount - 22500 BDT / Month
              </div>
              <Link to="/add-to-find" className="badge badge-outline">
                Add to find
              </Link>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className="card bg-white  shadow-md">
          <figure>
            <img className="w-full min-h-52 max-h-60" src={deluxe} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Deluxe Bed</h2>
            <p className="text-gray-600">
              Single Bed For one Person .Study environment with reading table
              and chair{" "}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                Rent Amount - 25000 BDT / Month
              </div>
              <Link to="/add-to-find" className="badge badge-outline">
                Add to find
              </Link>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div className="card bg-white  shadow-md">
          <figure>
            <img className="w-full min-h-52 max-h-60" src={studio2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Studio Bed</h2>
            <p className="text-gray-600">
              Studio type room .Very neat and clean comfortable room with good
              environment{" "}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                Rent Amount - 27000 BDT / Month
              </div>
              <Link to="/add-to-find" className="badge badge-outline">
                Add to find
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-white  shadow-md">
          <figure>
            <img className="w-full min-h-52 max-h-60" src={deluxe2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Double Bed</h2>
            <p className="text-gray-600">
              Studio type room .Very neat and clean comfortable room with good
              environment{" "}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                Rent Amount - 22000 BDT / Month
              </div>
              <Link to="/add-to-find" className="badge badge-outline">
                Add to find
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-white  shadow-md">
          <figure>
            <img className="w-full min-h-52 max-h-60" src={double2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Studio Bed</h2>
            <p className="text-gray-600">
              Studio type room .Very neat and clean comfortable room with good
              environment{" "}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                Rent Amount - 24000 BDT / Month
              </div>
              <Link to="/add-to-find" className="badge badge-outline">
                Add to find
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

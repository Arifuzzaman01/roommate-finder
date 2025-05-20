import React, { useContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Layout/AuthProvider";

const AddToFind = () => {
  const { user } = useContext(AuthContext);
  const [roomType, setRoomType] = useState("");
  const [lifestyle, setLifeStyle] = useState("");
  const [available, setAvailable] = useState("");
  console.log(user);
  const handleChange = (e) => {
    e.preventDefault();
    setRoomType(e.target.value);
  };
  const handleLifeStyle = (e) => {
    e.preventDefault();
    setLifeStyle(e.target.value);
  };
  const handleAvailable = (e) => {
    e.preventDefault();
    setAvailable(e.target.value);
  };
  const handleAddToFind = (e) => {
    e.preventDefault();
    // console.log(roomType, lifestyle);
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, location, details, title, contact, amount } =
      Object.fromEntries(formData);

    const postedData = {
      title,
      name,
      email,
      roomType,
      lifestyle,
      contact,
      amount,
      location,
      details,
      available,
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postedData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        setRoomType("");
        setLifeStyle("");
        setAvailable("");
      });
  };
  return (
    <div className="flex justify-center items-center bg-[#e8faf4] py-10">
      <div className="card bg-base-100 w-full max-w-2/3 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl text-center font-bold pt-5">
            Add To Find Your Roommate
          </h1>
          <form
            onSubmit={handleAddToFind}
            className="fieldset flex flex-col md:grid grid-cols-2 gap-7 "
          >
            <div>
              <label className="label">Title</label>
              <br />
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <label className="label">Location</label>
              <br />
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Find Location"
                required
              />
            </div>
            <div>
              <label className="label">Your Full Name</label>
              <br />
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="input w-full"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div>
              <label className="label">Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={user?.email}
                className="input w-full"
                placeholder="info@gmail.com"
                required
              />
            </div>
            <div>
              <label className="label">Rent Amount</label>
              <br />
              <input
                type="text"
                name="amount"
                className="input w-full"
                placeholder="12300"
                required
              />
            </div>
            {/* select room-type */}
            <div>
              <select
                value={roomType}
                onChange={handleChange}
                className="select select-primary md:mt-4 w-full"
              >
                <option value="" disabled>
                  Pick a Room Type
                </option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite Room</option>
              </select>
            </div>
            <div>
              <select
                value={lifestyle}
                onChange={handleLifeStyle}
                className="select select-primary w-full"
              >
                <option value="" disabled>
                  Pick Your Life Style
                </option>
                <option value="Night owl">Night owl</option>
                <option value="Early bird ">Early bird </option>
                <option value="Moderately clean">Moderately clean</option>
                <option value="Very tidy">Very tidy</option>
                <option value="Very tidy">Very tidy</option>
              </select>
            </div>

            <div>
              <select
                value={available}
                onChange={handleAvailable}
                className="select select-primary w-full"
              >
                <option value="" disabled>
                  Availability
                </option>
                <option value="Night owl">Available</option>
                <option value="Early bird ">Not available </option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="label">Contact Info</label>
              <br />
              <input
                type="text"
                name="contact"
                className="input w-full"
                placeholder="+88 0180000000"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="label">Your bio</label>
              <br />
              <textarea
                name="details"
                className="textarea w-full h-24"
                placeholder="Bio"
              ></textarea>
            </div>
            <button className="btn  bg-[#5EBB2B] mt-4 col-span-2 font-bold text-white">Add Roommate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToFind;

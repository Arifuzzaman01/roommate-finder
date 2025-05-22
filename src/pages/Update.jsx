import React, { useContext, useState } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useContext(AuthContext);
  const elderData = useLoaderData();
  //   console.log(elderData,"elderData");
  const {
    _id,
    title,
    amount,
    location,
    details,
    contact,
    roomType,
    lifestyle,
    available,
  } = elderData;
  const [changeRoom, setChangeRoom] = useState("");
  const [changeLife, setChangeLife] = useState("");
  const [changeAva, setChangeAva] = useState("");
  // handleFunction
  const handleRoomType = (e) => {
    e.preventDefault();
    setChangeRoom(e.target.value);
  };
  const handleUpdateLifeStyle = (e) => {
    e.preventDefault();
    setChangeLife(e.target.value);
  };
  const handleUpdateAvailable = (e) => {
    e.preventDefault();
    setChangeAva(e.target.value);
  };
  // handle Update
  const handleUpdateToFind = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, location, details, title, contact, amount } =
      Object.fromEntries(formData);

    const updateData = {
      title,
      name,
      email,
      roomType: changeRoom,
      lifestyle: changeLife,
      contact,
      amount,
      location,
      details,
      available: changeAva,
    };
      console.log(updateData);
    fetch(`https://roommate-finder-server-khaki.vercel.app/users/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("update Fail");
        }
      })
      .then((data) => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Data Update Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        alert(error.message || "Something went wrong");
      });
  };
  console.log(changeRoom, changeLife, changeAva);
  return (
    <div className="flex justify-center items-center bg-[#e8faf4] py-10">
      <div className="card bg-base-100 w-full max-w-2/3 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl text-center font-bold pt-5">
            Update Your Roommate
          </h1>
          <form
            onSubmit={handleUpdateToFind}
            className="fieldset flex flex-col md:grid grid-cols-2 gap-7 "
          >
            <div>
              <label className="label">Title</label>
              <br />
              <input
                type="text"
                name="title"
                defaultValue={title}
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
                defaultValue={location}
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
                defaultValue={amount}
                className="input w-full"
                placeholder="12300"
                required
              />
            </div>
            {/* select room-type */}
            <div>
              <label className="label">Room Type as You Need</label>
              <select
                // value={changeRoom}
                onChange={handleRoomType}
                className="select select-primary  w-full"
              >
                <option defaultValue={roomType} disabled>
                  Pick a Room Type
                </option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite Room</option>
              </select>
            </div>
            <div>
              <label className="label">Add Your Life Style</label>
              <select
                // value={lifestyle}
                onChange={handleUpdateLifeStyle}
                className="select select-primary w-full"
              >
                <option defaultValue={lifestyle} disabled>
                  Pick Your Life Style
                </option>
                <option value="Night owl">Night owl</option>
                <option value="Early bird ">Early bird </option>
                <option value="Moderately clean">Moderately clean</option>
                <option value="Very tidy">Very tidy</option>
              </select>
            </div>

            <div>
              <label className="label">Availability</label>
              <select
                // value={available}
                onChange={handleUpdateAvailable}
                className="select select-primary w-full"
              >
                <option defaultValue={available} disabled>
                  Availability
                </option>
                <option value="Available">Available</option>
                <option value="Not available ">Not available </option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="label">Contact Info</label>
              <br />
              <input
                type="text"
                name="contact"
                defaultValue={contact}
                className="input w-full"
                placeholder="+88 0180000000"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="label">Write Details About as You Need</label>
              <br />
              <textarea
                name="details"
                defaultValue={details}
                className="textarea w-full h-24"
                placeholder="Write Details About as You Need"
              ></textarea>
            </div>
            <button className="btn  bg-[#5EBB2B] mt-4 col-span-2 font-bold text-white">
              Update Roommate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

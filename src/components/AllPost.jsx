import React, { useEffect, useState } from "react";
import { data, useLoaderData } from "react-router";

const AllPost = ({ data }) => {
  // console.log(data);
  const{title,name,amount,location,roomType,email}=data

  return (
    <div>
      
      <div className="card card-border bg-base-100 border-white">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="grid grid-cols-2">
            <p>Room Type : { roomType}</p>
            <p>Rent Amount: {amount}</p>
            <address>Location : { location}</address>
            
          </div>
          <div className="flex justify-around">
            <h4 className="text-[18px]">Finder : { name}</h4>
            <div>
              <p>Email Address</p>
              <email> { email}</email>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPost;

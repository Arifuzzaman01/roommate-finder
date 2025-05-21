import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import { Link, useLoaderData } from "react-router";

import { MdDelete, MdEdit } from "react-icons/md";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  //   console.log(user.displayName);
  const initialData = useLoaderData();
  // console.log(initialData);
  useEffect(() => {
    const filterData = initialData.filter((data) => data.email === user.email);
    setData(filterData);
  }, []);
  console.log(data);
  return (
    <div className="flex justify-center items-center py-10">
      <div className="overflow-x-auto flex flex-col items-center">
        {/* <h1 className="text-3xl font-bold">{ user.displayName}</h1> */}
        <h1 className="text-3xl font-bold"> My Total Listing -{data.length}</h1>
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="border-gray-600">
              <th></th>
              <th>Name</th>
              <th>Room Type</th>
              <th>Rent Amount</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((singleData, index) => (
              <tr key={singleData._id} className="border-gray-600">
                <th>{index + 1}</th>
                <td>{singleData.name}</td>
                <td>{singleData.title}</td>
                <td>{singleData.amount}</td>
                <td>{singleData.location}</td>
                <td className="flex">
                  <Link to='/update' className="px-2 py-1 flex gap-1 items-center hover:bg-green-500 rounded-sm"><MdEdit /> Update</Link>
                  <button className="px-2 py-1 flex gap-1 items-center hover:text-white hover:bg-red-500 rounded-sm"> <MdDelete /> Delete</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListing;

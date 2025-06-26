
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Layout/AuthProvider";

const BrowsListing = () => {
  const allData = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log(user.accessToken);
  const accessToken = user?.accessToken;
  // const [allData, setAllData] = useState([]);
  
  // console.log(data);
  return (
    <div className="overflow-x-auto w-11/12 mx-auto py-10 ">
      <h1 className="text-2xl font-bold text-center py-5">Brows Listing</h1>
      <table className="table table-pin-rows ">
        {/* head */}
        <thead>
          <tr className="border-gray-700 bg-gray-300 ">
            <th>Room Title</th>
            <th>Name</th>
            <th>Room type</th>
            <th>Life Style</th>

            <th>Location</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="border">
          {allData.map((data) => (
            <tr key={data._id} className="border-gray-700">
              <td className="">
                <div className="flex items-center gap-3">
                  <h3>{data.title}</h3>
                </div>
              </td>
              <td>
                <h3>{data.name}</h3>
              </td>
              <td>
                <h3>{data.roomType}</h3>
              </td>
              <td>
                <h3>{data.lifestyle}</h3>
              </td>

              <td>
                <h3>{data.location}</h3>
              </td>

              <th>
                <Link
                  to={`/details/${data._id}`}
                  className=" hover:text-[15px] mx-2 hover:mx-0 hover:text-blue-700"
                >
                  See More
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowsListing;

import React from "react";
import { Link, useLoaderData } from "react-router";

const BrowsListing = () => {
  const allData = useLoaderData();
  // console.log(data);
  return (
    <div className="overflow-x-auto w-11/12 mx-auto py-10 bg-[#e8faf4]">
      <table className="md:table table-pin-rows ">
        {/* head */}
        <thead>
          <tr className="border-gray-700 ">
            <th>
             Room Title
            </th>
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
            <tr className="border-gray-700">
              
              <td className="">
                <div className="flex items-center gap-3">
                  <h3>{ data.title}</h3>
                </div>
              </td>
              <td>
                <h3>{ data.name}</h3>
              </td>
              <td>
                <h3>{ data.roomType}</h3>
              </td>
              <td>
                <h3>{ data.lifestyle}</h3>
              </td>
              
              <td>
                <h3>{ data.location}</h3>
              </td>
              
              <th>
                <Link to={`/details/${data._id}`} className=" hover:text-[15px] mx-2 hover:mx-0 hover:text-blue-700">See More</Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowsListing;

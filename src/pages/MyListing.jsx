import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import { Link, useLoaderData } from "react-router";

import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const initialData = useLoaderData();
  // console.log(initialData);
  useEffect(() => {
    const filterData = initialData.filter((data) => data.email === user.email);
    setData(filterData);
  }, [initialData, user.email]);

  //   console.log(singleData,data.length);
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-server-khaki.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((resData) => {
            // console.log(data);
            const remainingData = data.filter((data) => data._id !== id);
            setData(remainingData);
            if (resData.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="flex justify-center items-center py-10">
  <div className="overflow-x-auto flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold py-5">
      My Total Listing - {data.length}
    </h1>

    {data.length === 0 ? (
      <p className="text-red-500 text-lg">Not added Roommate Finder</p>
    ) : (
      <table className="table border">
        <thead>
          <tr className="border-gray-600">
            <th></th>
            <th>Name</th>
            <th>Room Type</th>
            <th>Rent Amount</th>
            <th>Location</th>
            <th>Actions</th>
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
              <td className="flex gap-2">
                <Link
                  to={`/update/${singleData._id}`}
                  className="px-2 py-1 flex gap-1 items-center hover:bg-green-500 rounded-sm"
                >
                  <MdEdit /> Update
                </Link>
                <button
                  onClick={() => handleDelete(singleData._id)}
                  className="px-2 py-1 flex gap-1 items-center hover:text-white hover:bg-red-500 rounded-sm"
                >
                  <MdDelete /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>

  );
};

export default MyListing;

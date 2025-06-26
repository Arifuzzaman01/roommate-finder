import React, { useState } from "react";
import { useLoaderData } from "react-router";
import roomImg from "../assets/bedRoom1.jpg";
import { BiLike, BiSolidLike } from "react-icons/bi";

const Details = () => {
  const data = useLoaderData();
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  //   console.log(data);
  const {
    title,
    name,
    email,
    location,
    contact,
    lifestyle,
    roomType,
    details,
    amount
  } = data;

  const handleLike = () => {
    setLike(!like);
    if (!like) {
      setLikeCount(likeCount + 1);
    }
  };
  return (
    <div className="py-10 flex justify-center items-center min-h-[calc(100vh-60px)]">
      <div className="card bg-base-100 w-2/3 shadow-sm">
        <h2 className=" text-2xl font-bold text-center mt-10">{title}</h2>
        <div className="flex justify-center gap-8 mb-6">
          <h3 className="font-bold">Posted by : {name}</h3>
          <h3 className="text-gray-500">{email}</h3>
        </div>
        <figure>
          <img className="w-3/4 h-80" src={roomImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="bg-gray-100 p-2 mx-10 md:mx-20 flex justify-between">
            <div className="flex gap-2">
              <h1 className="text-xl">{likeCount !== 0 && likeCount } </h1>
              <button onClick={handleLike} className="text-xl text-blue-600">
                {like ? <BiSolidLike /> : <BiLike />}
              </button>
            </div>
            <h1>{like && <p>Contact - {contact}</p>}</h1>
          </div>
          <table className="mx-10 md:mx-20">
            <tbody className="text-[16px]">
              <tr>
                <td>Room Type</td>
                <td>-</td>
                <td>{roomType}</td>
              </tr>
              <tr>
                <td>Life Style</td> <td>-</td>
                <td>{lifestyle}</td>
              </tr>
              <tr>
                <td>Location</td> <td>-</td>
                <td>{location}</td>
              </tr>
              <tr>
                <td>Room Details </td> <td>-</td>
                <td colSpan={2}>{details}</td>
              </tr>
              <tr>
                <td>Rent Amount </td> <td>-</td>
                <td colSpan={2}>{amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;

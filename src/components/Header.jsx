import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import CardSection from "./CardSection";
import AllPost from "./AllPost";
import { useLoaderData } from "react-router";
import Hero from "./Hero";

const Header = () => {
  const postData = useLoaderData();
  const [showAllData, setShowAllData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  //   console.log(showAll);
  useEffect(() => {
    if (showAll) {
      setShowAllData(postData);
    } else {
      setShowAllData(postData.slice(0, 6));
    }
  }, [showAll, postData]);
  // console.log(showAll);
  return (
    <div>
      <div className=" w-11/12 mx-auto">
        <Banner></Banner>
       
        <div className="my-10 ">
          <h1 className="text-3xl font-bold text-center my-5 ">Featured Roommates Post </h1>
          <div className="md:grid grid-cols-3 gap-5">
            {showAllData.map((data) => (
              <AllPost key={data._id} data={data}></AllPost>
            ))}
          </div>
          <button onClick={() => setShowAll(!showAll)} className="btn bg-green-500 mt-5 text-white">
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
         <Hero></Hero>
        <CardSection></CardSection>
      </div>
    </div>
  );
};

export default Header;

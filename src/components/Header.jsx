import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import CardSection from "./CardSection";
import AllPost from "./AllPost";
import { useLoaderData } from "react-router";
import Hero from "./Hero";
import About from "../pages/About";

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
       <Hero></Hero>
        <Banner></Banner>
        <div className="mt-10 ">
          <h1 className="text-3xl font-bold text-center mb-10 ">Featured Roommates Post </h1>
          <div className="md:grid md:grid-cols-3 space-y-4 md:space-y-0 gap-5">
            {showAllData.map((data) => (
              <AllPost key={data._id} data={data}></AllPost>
            ))}
          </div>
          <button onClick={() => setShowAll(!showAll)} className="btn bg-green-500 mt-5 text-white">
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
         <About></About>
        <CardSection></CardSection>
      </div>
    </div>
  );
};

export default Header;

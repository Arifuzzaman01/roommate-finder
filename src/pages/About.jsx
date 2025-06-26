import React from "react";

const About = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-7">About Us</h1>
      <div className="md:flex gap-5">
        <div className="md:w-2/3 space-y-5 text-center md:text-start">
          <div>
            <h1 className="text-xl font-bold ">What is the Project?</h1>
            <p className="font-bold py-2">
              "Roommate Finder is a platform that connects people looking for
              shared accommodation. It allows users to post available spaces,
              find roommates, and easily get in touch."
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold ">Why this Project?</h1>
            <p className="font-bold py-2">
              "Finding the right roommate can be challenging. This app aims to
              solve that by providing an easy, trusted, and user-friendly space
              for both room owners and seekers."
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold ">Mission/Vision</h1>
            <p className="font-bold py-2">
              "Our mission is to make finding a compatible roommate seamless and
              stress-free."
            </p>
          </div>
        </div>
        <div className="border-l-2  border-green-500">
          <h1 className="text-2xl font-bold mb-5 ml-1">Key Features</h1>
          <ul className="space-y-4 ml-8">
            <li>✅ Find available rooms with search and filter options.</li>
            <li>✅ Post your available space quickly.</li>
            <li>✅ Edit or delete your listing anytime. </li>
            <li>✅ View room details and contact the owner.</li>
            <li>✅ Secured user authentication and listing privacy.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Navbar from "../components/Navbar";

const Condition = () => {
  return (
      <div >
          <Navbar></Navbar>
      <div className="my-10 mx-20">
        <h1 className="text-xl font-bold"> Basic Terms User Responsibility</h1>
        <ul>
          <li>
            Users are solely responsible for the information they provide and
            the interactions they have with others on the platform.
          </li>
          <li>
            Age Restriction Users must be at least 18 years old to create an
            account and use the Roommate Finder website.
          </li>
          <li>
            No Illegal Use The platform must not be used for illegal activities,
            including but not limited to fraud, harassment, or discrimination.
          </li>
        </ul>
      </div>
          <div className="my-10 mx-20">
              <h1 className="text-xl font-bold"> Advance Terms</h1>
        <ol>
          <li>
            Profile Verification Disclaimer:- While we offer email or phone
            verification, we do not guarantee the accuracy or legitimacy of any
            user profile. Users should take necessary precautions when meeting
            others.
          </li>
          <li>
            Service Availability:- We reserve the right to modify or discontinue
            the service (or any part of it) temporarily or permanently, with or
            without notice.
          </li>
          <li>
            Limitation of Liability:- Roommate Finder is not liable for any
            damages or disputes that may arise from interactions, agreements, or
            living arrangements made through the platform.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Condition;

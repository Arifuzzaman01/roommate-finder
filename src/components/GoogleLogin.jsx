import React, { useContext } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import { useLocation, useNavigate } from "react-router";

const GoogleLogin = () => {
  const { signInGoogle } = useContext(AuthContext);
  const navigator = useNavigate()
  const location = useLocation()
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
         navigator(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="btn  btn-primary border-[#e5e5e5]"
    >
      Login with Google
    </button>
  );
};

export default GoogleLogin;

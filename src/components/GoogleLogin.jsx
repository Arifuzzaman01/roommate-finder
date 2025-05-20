import React, { useContext } from "react";
import { AuthContext } from "../Layout/AuthProvider";

const GoogleLogin = () => {
  const { signInGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
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

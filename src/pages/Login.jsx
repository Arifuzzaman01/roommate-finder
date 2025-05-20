import React, { useContext } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import { Link } from "react-router";
import GoogleLogin from "../components/GoogleLogin";
import Navbar from "../components/Navbar";

const Login = () => {
  const { signInUser} = useContext(AuthContext);
  const handleSignUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
 
  return (
      <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-[#e8faf4]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl card-body">
        <h1 className="text-3xl font-bold">Login Here</h1>
        <form onSubmit={handleSignUser} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>
        <p className="text-center -my-2">Or</p>
        <GoogleLogin></GoogleLogin>
        <p>
          You haven't an account? Please{" "}
          <Link to='/register' className="text-blue-600 underline">Create an account</Link>
        </p>
      </div>
    </div>
      </>
  );
};

export default Login;

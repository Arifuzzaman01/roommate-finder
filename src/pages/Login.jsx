import React, { useContext, useState } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "../components/GoogleLogin";
import Navbar from "../components/Navbar";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [eye, setEye] = useState(false);
  const [passError, setPassError] = useState("");
  const navigator = useNavigate();
  const handleSignUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogIN Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        e.target.reset();
        navigator(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setPassError('Invalid email or password');
      });
    setPassError('')
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
              required
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={eye ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div
                onClick={() => setEye(!eye)}
                className="absolute top-2 right-6 z-10 p-2 cursor-pointer"
              >
                {eye ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <span className="text-red-600">{ passError ? passError : ''}</span>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <p className="text-center -my-2">Or</p>
          <GoogleLogin></GoogleLogin>
          <p>
            You haven't an account? Please{" "}
            <Link to="/register" className="text-blue-600 underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

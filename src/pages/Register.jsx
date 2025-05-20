import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import GoogleLogin from "../components/GoogleLogin";
import { Link } from "react-router";
import { AuthContext } from "../Layout/AuthProvider";

const Register = () => {
  const { createUser, setUser, user, updataUserProfile } =
    useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, photo, password } = Object.fromEntries(formData);
    //   console.log(name,email,photo,password)
    createUser(email, password)
      .then((result) => {
        const userData = result.user;
        //   console.log(userData);
        updataUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...userData, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setRegError(error?.message);
            setUser(userData);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-[#e8faf4] py-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl card-body">
          <h1 className="text-3xl font-bold">Register Here</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo Url"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </form>
          <p className="text-center -my-2">Or</p>
          <GoogleLogin></GoogleLogin>
          <p>
            You haven an account? Please{" "}
            <Link to="/register" className="text-blue-600 underline">
              LogIn here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

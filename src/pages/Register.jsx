import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import GoogleLogin from "../components/GoogleLogin";
import { Link } from "react-router";
import { AuthContext } from "../Layout/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Footer from "../components/Footer";

const Register = () => {
  const { createUser, setUser, user, updataUserProfile } =
    useContext(AuthContext);
  const [validPass, setValidPass] = useState("");
  const[eye,setEye] = useState(false);
  const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(password);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { name, email, photo, password } = Object.fromEntries(formData);
    //   console.log(name,email,photo,password)
    if (!isValidPassword(password)) {
      return setValidPass(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character."
      );
    }

    createUser(email, password)
      .then((result) => {
        const userData = result.user;
        //   console.log(userData);
        updataUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...userData, displayName: name, photoURL: photo });
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Register Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
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
  //   console.log(user);
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
            <span className="text-red-600">{validPass ? validPass : ""}</span>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </form>
          <p className="text-center -my-2">Or</p>
          <GoogleLogin></GoogleLogin>
          <p>
            You haven an account? Please{" "}
            <Link to="/login" className="text-blue-600 underline">
              LogIn here
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;

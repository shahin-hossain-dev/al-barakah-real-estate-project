import { useForm } from "react-hook-form";
import Navbar from "../shared/Navbar/Navbar";
import { background } from "../Login/Login";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import "react-toastify/dist/ReactToastify.css";
import { AlertContext } from "../../layouts/Root";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const { successAlert } = useContext(AlertContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (userData) => {
    const name = userData.name;
    const email = userData.email;
    const password = userData.password;
    const photoURL = userData.photoURL;
    console.log(name);
    // create user with firebase
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(name, photoURL);
        navigate("/");
        successAlert("register");
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("email-already")) {
          setError("Email already been used");
        }
      });
  };
  return (
    <div style={background}>
      <Navbar />

      <div className=" flex justify-center items-center min-h-screen bg-[#0000004D]">
        <div className="card mt-24 shrink-0 w-full max-w-sm shadow-2xl glass">
          <h1 className="text-3xl mt-5 text-center font-bold text-white">
            Create Account
          </h1>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="card-body pt-0"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">
                  Please fill out this field{" "}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">
                  Please fill out this field{" "}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">
                  Please fill out this field{" "}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600">
                  Please fill out this field{" "}
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Register</button>
            </div>
          </form>
          <p className="label-text-alt text-white text-center mb-8">
            Already have an account? please{" "}
            <Link to={"/login"} className=" link link-hover link-warning">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

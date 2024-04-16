import { useForm } from "react-hook-form";
import Navbar from "../shared/Navbar/Navbar";
import { background } from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import "react-toastify/dist/ReactToastify.css";
import { AlertContext } from "../../layouts/Root";
import { Helmet } from "react-helmet-async";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const { successAlert } = useContext(AlertContext);
  const [passwordShow, setPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // toast settings
  const toastSetting = {
    position: "top-center",
    hideProgressBar: true,
    autoClose: 2000,
  };

  const handleRegister = (userData) => {
    const { name, email, password, photoURL } = userData;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters", toastSetting);
      return;
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
      return toast.error(
        "At least one Uppercase or Lowercase character",
        toastSetting
      );
    }
    // create user with firebase
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(name, photoURL);
        setUser({ displayName: name, photoURL: photoURL });
        navigate("/");
        successAlert("register");
      })
      .catch((error) => {
        console.log(error);

        if (error.message.includes("email-already")) {
          toast.error("This email already been used", toastSetting);
        } else {
          toast.error(error.message, toastSetting);
        }
      });
  };
  return (
    <div style={background}>
      <Helmet>
        <title>Register | Al-Barakah Real Estate</title>
      </Helmet>
      <Navbar />

      <div className=" flex justify-center items-center min-h-screen bg-[#0000004D] pb-5">
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
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Full Name"
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
            <div>
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <div className="form-control relative ">
                <input
                  {...register("password", { required: true })}
                  type={passwordShow ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered "
                />
                {/* eye button */}
                <span
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="text-2xl absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {passwordShow ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-600">
                  Please fill out this field{" "}
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral text-white">
                Register
              </button>
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

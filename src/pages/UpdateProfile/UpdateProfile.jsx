import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { useForm } from "react-hook-form";

import { background } from "../Login/Login";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { AlertContext } from "../../layouts/Root";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { successAlert } = useContext(AlertContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    },
  });

  const handleUpdateProfile = (userData) => {
    const name = userData.name;
    const photoURL = userData.photoURL;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ displayName: name, photoURL: photoURL });
        successAlert("profile update");
        console.log("Profile updated");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={background}>
      <Helmet>
        <title>Update Profile | Al-Barakah Real Estate</title>
      </Helmet>
      <Navbar />
      <div className=" flex justify-center items-center min-h-screen ">
        <div className="card mt-24 shrink-0 w-full max-w-sm shadow-2xl glass">
          <h1 className="text-3xl mt-5 text-center font-bold text-white">
            Update Profile
          </h1>
          <form
            onSubmit={handleSubmit(handleUpdateProfile)}
            className="card-body pt-0"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input
                {...register("photoURL")}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered disabled"
                disabled
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className={`btn btn-neutral text-white`}>
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

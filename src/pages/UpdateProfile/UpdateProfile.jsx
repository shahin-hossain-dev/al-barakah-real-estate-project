import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { useForm } from "react-hook-form";

import { background } from "../Login/Login";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { AlertContext } from "../../layouts/Root";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { successAlert } = useContext(AlertContext);
  const [userNameBtnShow, setUserNameBtnShow] = useState(true);
  const [userPhotoBtnShow, setUserPhotoBtnShow] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (
      user.displayName === userNameBtnShow ||
      userNameBtnShow.length === 0 ||
      userNameBtnShow === true
    ) {
      setBtnShow(true);
    } else {
      setBtnShow(false);
    }
  }, [userNameBtnShow]);

  useEffect(() => {
    if (user.photoURL === userPhotoBtnShow || userPhotoBtnShow === true) {
      setBtnShow(true);
    } else {
      setBtnShow(false);
    }
  }, [userPhotoBtnShow]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.displayName,
      email: user.email ? user.email : "Email is not Permissible",
      photoURL: user?.photoURL,
    },
  });

  const handleUpdateProfile = (userData) => {
    const displayName = userData.name.trim();
    const photoURL = userData.photoURL;
    const email = userData.email;

    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
      .then(() => {
        setUser(auth.currentUser);
        setUser({ displayName, photoURL, email });
        setBtnShow(true);
        successAlert("profile update");
      })
      .catch((error) => setError(error.message));
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
                onChange={(e) => setUserNameBtnShow(e.target.value)}
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
                onChange={(e) => setUserPhotoBtnShow(e.target.value)}
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
                title="You couldn't change this field"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                disabled={btnShow}
                value={"Update Profile"}
                className={`btn btn-neutral text-white`}
              ></input>
            </div>
          </form>
          <p className="text-center text-red-600">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

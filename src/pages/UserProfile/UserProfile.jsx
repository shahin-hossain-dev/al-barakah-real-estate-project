import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import coverImg from "../../assets/image6.webp";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={coverImg} alt="" className="w-full h-[300px]  md:h-full" />
        <div className="flex justify-center absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2  items-center">
          <div className="card  bg-neutral glass text-neutral-content">
            <div className="card-body items-center text-center">
              <img src={user?.photoURL} alt="" className="rounded-full" />
              <h2 className="card-title">{user?.displayName}</h2>
              <p>{user.email}</p>
              <div className="card-actions justify-end">
                <Link to={"/update-profile"}>
                  <button className="btn btn-neutral">Update Profile</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

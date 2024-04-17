import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import cover from "../../assets/cover.jpg";
import { Helmet } from "react-helmet-async";
import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const background = {
    backgroundImage: `linear-gradient(to right, #00000099, #00000099),url(${cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Helmet>
        <title>User Profile | Al-Barakah Real Estate</title>
      </Helmet>
      <Navbar />
      <div className="relative mb-12 md:mb-24">
        <div
          className="w-full h-[300px] md:h-[400px] relative"
          style={background}
        >
          <div className="w-full font-exo text-center text-2xl md:text-3xl text-white absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
            <p
              className="mb-5 font-semibold text-style"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              User Profile
            </p>
          </div>
          <div className="flex justify-center absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2  items-center">
            <img
              src={user?.photoURL}
              alt=""
              className="rounded-full md:w-[150px] md:h-[150px]"
            />
          </div>
        </div>

        <div className="card  mt-12 lg:mt-16 ">
          <div className="card-body items-center text-center space-y-2">
            <h2 className="card-title text-neutral text-3xl font-exo font-semibold">
              {user?.displayName}
            </h2>
            <div className="flex items-center gap-2 text-xl">
              <MdOutlineMail className="text-[#CA965C]" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FaUser className="text-[#CA965C]" />
              <span>
                {user.emailVerified ? "User verified" : "User not verified"}
              </span>
            </div>
            <div className="card-actions ">
              <Link to={"/update-profile"}>
                <button className="btn btn-neutral text-lg">
                  Update Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

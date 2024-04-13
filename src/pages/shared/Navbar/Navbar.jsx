import logo from "../../../assets/al-barakah.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import userImg from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { AlertContext } from "../../../layouts/Root";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const { successAlert } = useContext(AlertContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        successAlert("logout");
      })
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <ActiveLink to={"/"}>Home</ActiveLink>
      <ActiveLink to={"/update-profile"}>Update Profile</ActiveLink>
    </>
  );
  return (
    <div className="absolute z-50 glass">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box "
            >
              {links}
            </ul>
          </div>
          <img src={logo} className=" w-2/3 lg:w-1/2 ms-3 lg:ms-0" alt="" />
        </div>
        <div className=" gap-5 items-center navbar-center hidden lg:flex">
          {links}
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center">
              <div className="dropdown dropdown-end me-3">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle flex justify-center items-center  avatar tooltip tooltip-bottom"
                  data-tip={user.displayName && user.displayName}
                >
                  <div className="w-10 rounded-full">
                    <img alt="User Image" src={user.photoURL || userImg} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="justify-between ">
                      <Link to={"/user-profile"}>User Profile</Link>
                    </button>
                  </li>
                  <li>
                    <button>Settings</button>
                  </li>
                  <li>
                    <button>Logout</button>
                  </li>
                </ul>
              </div>
              <button onClick={handleLogout} className="btn btn-neutral">
                Logout
              </button>
            </div>
          ) : (
            <button className="btn btn-neutral">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

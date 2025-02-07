import { Link, useNavigate, useLocation } from "react-router-dom";
import image5 from "../../assets/image5.webp";
import Navbar from "../shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { AlertContext, toastSetting } from "../../layouts/Root";
// icons
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

export const background = {
  backgroundImage: `url(${image5})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Login = () => {
  const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);
  const { successAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state?.pathname);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // login handler
  const handleLogin = (userData) => {
    const email = userData.email;
    const password = userData.password;

    if (password.length < 6) {
      return toast.error(
        "Password should be at least 6 characters",
        toastSetting
      );
    }

    // user login
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          navigate(location.state?.pathname || "/");
          successAlert("login");
        }
      })
      .catch((error) => {
        if (error.message.includes("invalid")) {
          successAlert("invalid");
        } else if (error.message.includes("disabled")) {
          toast.error("User account temporary disabled", toastSetting);
        } else {
          toast.error(error.message, toastSetting);
        }
      });
  };
  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          navigate(location.state?.pathname || "/");
          successAlert("login");
        }
      })
      .catch((error) => {
        if (error.message.includes("different-credential")) {
          toast.error("User email already exist", toastSetting);
        } else {
          toast.error(error.message, toastSetting);
        }
      });
  };
  // github login
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          successAlert("Login Successful");
          navigate(location.state?.pathname || "/");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("different-credential")) {
          toast.error("User email already exist", toastSetting);
        } else {
          toast.error(error.message, toastSetting);
        }
      });
  };
  return (
    <div style={background}>
      <Helmet>
        <title>Login | Al-Barakah Real Estate</title>
      </Helmet>
      <Navbar />

      <div className=" flex justify-center items-center px-5 md:px-0 min-h-screen bg-[#0000004D] pb-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl glass mt-24">
          <h1 className="text-3xl mt-5 text-center font-bold text-white">
            Login now!
          </h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="card-body  pt-0"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="name@example.com"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600 mt-1">
                  Please enter your email{" "}
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
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600 mt-1">
                  Please enter a password{" "}
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral  text-white">Login</button>
            </div>
          </form>
          <p className="label-text-alt text-white text-center ">
            Don't have any account? please{" "}
            <Link to={"/register"} className=" link link-hover link-warning">
              Register
            </Link>
          </p>
          <div className="form-control mt-6 mx-8">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-info text-white"
            >
              <FaGoogle />
              Continue With Google
            </button>
          </div>
          <div className="form-control my-6 mx-8">
            <button
              onClick={handleGithubLogin}
              className="btn btn-neutral text-white"
            >
              <FaGithub />
              Continue with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

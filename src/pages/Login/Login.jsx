import { Link, useNavigate } from "react-router-dom";
import image5 from "../../assets/image5.webp";
import Navbar from "../shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { AlertContext } from "../../layouts/Root";
// icons
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // login handler
  const handleLogin = (userData) => {
    const email = userData.email;
    const password = userData.password;
    // user login
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          navigate("/");
          successAlert("login");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          navigate("/");
          successAlert("login");
        }
      })
      .catch((error) => console.log(error));
  };
  // github login
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          successAlert("Login Successful");
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div style={background}>
      <Navbar />

      <div className=" flex justify-center items-center min-h-screen bg-[#0000004D]">
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
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Login</button>
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

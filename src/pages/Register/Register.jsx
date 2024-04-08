import { useForm } from "react-hook-form";
import Navbar from "../shared/Navbar/Navbar";
import image1 from "../../assets/image1.webp";
import { background } from "../Login/Login";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const handleRegister = (userData) => {
    console.log(userData);
  };
  return (
    <div style={background}>
      <Navbar />

      <div className=" flex justify-center items-center min-h-screen bg-[#0000004D]">
        <div className="card mt-24 shrink-0 w-full max-w-sm shadow-2xl glass">
          <h1 className="text-3xl mt-5 text-center font-bold text-white">
            Create Account
          </h1>
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
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
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
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

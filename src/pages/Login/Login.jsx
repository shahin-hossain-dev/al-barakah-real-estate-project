import { Link } from "react-router-dom";
import image1 from "../../assets/image1.webp";
import Navbar from "../shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
export const background = {
  backgroundImage: `url(${image1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (userData) => {
    console.log(userData);
  };
  return (
    <div style={background}>
      <Navbar />

      <div className=" flex justify-center items-center min-h-screen bg-[#0000004D]">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl glass">
          <h1 className="text-3xl mt-5 text-center font-bold text-white">
            Login now!
          </h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
              <button className="btn btn-neutral text-white">Login</button>
            </div>
          </form>
          <p className="label-text-alt text-white text-center mb-8">
            Don't have any account? please{" "}
            <Link to={"/register"} className=" link link-hover link-warning">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

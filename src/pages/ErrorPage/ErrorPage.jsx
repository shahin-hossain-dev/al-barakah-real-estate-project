import { Link } from "react-router-dom";
import error from "../../assets/error.png";
import { IoHomeSharp } from "react-icons/io5";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-5 text-neutral">
          <h2 className="text-5xl md:text-9xl  font-semibold font-exo mb-10 ">
            Oops!
          </h2>
          <h2 className="text-4xl md:text-8xl  font-semibold font-exo mb-10 ">
            404
          </h2>
          <h3 className="text-3xl font-semibold mb-2">Page Not Found</h3>
          <p className="text-lg ">
            We are sorry, the page you have looked for does not exist in our
            database! <br /> Maybe be go to our home page
          </p>
        </div>
        <Link to={"/"}>
          <button className="btn btn-neutral">
            <IoHomeSharp /> Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

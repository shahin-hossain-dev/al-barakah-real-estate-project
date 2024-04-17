import { Link } from "react-router-dom";
import logo from "../../../assets/al-barakah.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-10  bg-neutral">
      <div className="w-[90%] mx-auto flex flex-col text-center md:flex-wrap md:text-start md:flex-row gap-10  md:gap-10 lg:gap-5 items-center md:items-start  md:justify-between  text-white ">
        {/* footer title */}
        <aside>
          <div className="flex md:justify-start justify-center ">
            <img src={logo} alt="" className="w-[200px] mb-5" />
          </div>
          <p>
            Al-Barakah Real Estate Ltd.
            <br />
            Your Trusted Residential Real Estate Partner.
          </p>
          <div className="flex flex-col items-center md:items-start gap-2 mt-5">
            <span className="flex items-center gap-2">
              <IoLocationOutline className="text-[#CA965C]" />
              <span>15/2, 15/D, Mirpur, Dhaka</span>
            </span>
            <span className="flex items-center gap-2">
              <IoCall className="text-[#CA965C]" />
              <span>+8801676446077</span>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineEmail className="text-[#CA965C]" />
              <span>shahin.hossain.dev@gmail.com</span>
            </span>
          </div>
        </aside>
        {/* footer nav section */}
        <nav className="flex flex-col space-y-3 ">
          <h6 className="font-semibold uppercase text-[#CA965C] mb-3 font-exo">
            Services
          </h6>
          <Link className="link link-hover">Dream Dwelling Bangladesh</Link>
          <Link className="link link-hover">Golden Bengal Realty</Link>
          <Link className="link link-hover">Riverfront Homes BD</Link>
          <Link className="link link-hover">Elite Living Properties</Link>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold uppercase text-[#CA965C] mb-3 font-exo">
            Company
          </h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Career</Link>
          <Link className="link link-hover">Press & Media</Link>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold uppercase text-[#CA965C] mb-3 font-exo">
            Information
          </h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
        {/* news letter */}
        <div>
          <form>
            <h6 className="font-semibold uppercase text-[#CA965C] mb-3 font-exo">
              Newsletter
            </h6>
            <fieldset className="form-control w-80">
              <label className="label flex justify-center md:justify-start mb-2 font-exo">
                <span>Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item text-neutral border-[#CA965C]"
                />
                <button className="btn btn-neutral join-item border-[#CA965C]">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
          {/* social links */}
          <div className="mt-5">
            <h4 className="mb-3 font-exo">Connect with us</h4>
            <div className="flex justify-center md:justify-start gap-8 text-xl">
              <Link
                to={"https://www.facebook.com/"}
                target="_blank"
                className="hover:text-[#CA965C] duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={"https://twitter.com/"}
                target="_blank"
                className="hover:text-[#CA965C] duration-300"
              >
                <FaTwitter />
              </Link>
              <Link
                to={"https://www.instagram.com/"}
                target="_blank"
                className="hover:text-[#CA965C] duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                to={"https://www.linkedin.com/"}
                target="_blank"
                className="hover:text-[#CA965C] duration-300"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-b border-gray-600" />
      <p className="text-white text-center">
        <span className="text-[#CA965C]"> &copy; </span>
        <small className="font-exo">
          2024 All Rights Reserved Al-Barakah Real Estate Ltd.
        </small>
      </p>
    </footer>
  );
};

export default Footer;

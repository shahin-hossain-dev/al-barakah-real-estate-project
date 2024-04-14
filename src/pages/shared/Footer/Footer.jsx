import { Link } from "react-router-dom";
import logo from "../../../assets/al-barakah.png";
const Footer = () => {
  return (
    <footer className="p-10 bg-neutral mt-24">
      <div className="flex flex-col text-center md:text-start md:flex-row gap-5 items-center md:items-start  md:justify-between  text-white ">
        <aside>
          <div className="flex md:justify-start justify-center ">
            <img src={logo} alt="" className="w-[200px] mb-5" />
          </div>
          <p>
            Al-Barakah Real Estate Ltd.
            <br />
            Your Trusted Residential Real Estate Partner
          </p>
        </aside>
        <nav className="flex flex-col space-y-3 ">
          <h6 className="footer-title ">Services</h6>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </div>
      <hr className="my-10 border-b border-gray-600" />
      <p className="text-white text-center">
        &copy;{" "}
        <small>2024 All Rights Reserved Al-Barakah Real Estate Ltd.</small>
      </p>
    </footer>
  );
};

export default Footer;

import { NavLink } from "react-router-dom";
import "./ActiveLink.css";
const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-item text-white py-1 text-lg" : "text-white text-lg"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;

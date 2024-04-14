import { createContext } from "react";
import { Outlet } from "react-router-dom";
// react toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../pages/shared/Footer/Footer";

export const AlertContext = createContext(null);
const Root = () => {
  const toastSetting = {
    position: "top-center",
    hideProgressBar: true,
    autoClose: 1000,
  };
  const successAlert = (type) => {
    if (type === "login") {
      toast.success("Login Successfully", toastSetting);
    } else if (type === "register") {
      toast.success("Account Create Successfully", toastSetting);
    } else if (type === "profile update") {
      toast.success("User Profile Updated", toastSetting);
    } else if (type === "logout") {
      toast.success("Logout Successfully", toastSetting);
    } else {
      if (type === "invalid") {
        toast.error(" Invalid User & Password ", toastSetting);
      }
    }
  };
  const alertInfo = {
    successAlert,
  };
  return (
    <AlertContext.Provider value={alertInfo}>
      <div className="font-openSans">
        <Outlet />
        <ToastContainer />
        <Footer />
      </div>
    </AlertContext.Provider>
  );
};

export default Root;

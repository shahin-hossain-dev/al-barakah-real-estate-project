import { createContext } from "react";
import { Outlet } from "react-router-dom";
// react toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../pages/shared/Footer/Footer";

export const AlertContext = createContext(null);

// toast settings
export const toastSetting = {
  position: "top-center",
  hideProgressBar: true,
  autoClose: 2000,
};
const Root = () => {
  const successAlert = (type) => {
    if (type === "login") {
      toast.success("Login successfully", toastSetting);
    } else if (type === "register") {
      toast.success("Account create successfully", toastSetting);
    } else if (type === "profile update") {
      toast.success("User profile updated", toastSetting);
    } else if (type === "logout") {
      toast.success("Logout successfully", toastSetting);
    } else {
      if (type === "invalid") {
        toast.error(" Invalid user email & password ", toastSetting);
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

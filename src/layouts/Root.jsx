import { createContext } from "react";
import { Outlet } from "react-router-dom";
// react toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AlertContext = createContext(null);
const Root = () => {
  const successAlert = (type) => {
    if (type === "login") {
      toast.success("Login Successfully", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 1000,
      });
    } else if (type === "register") {
      toast.success("Account Create Successfully", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 1000,
      });
    } else if (type === "profile update") {
      toast.success("User Profile Updated", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 1000,
      });
    }
  };
  const alertInfo = {
    successAlert,
  };
  return (
    <AlertContext.Provider value={alertInfo}>
      <div>
        <Outlet />
        <ToastContainer />
      </div>
    </AlertContext.Provider>
  );
};

export default Root;

import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Loading = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <span className="">Loading...</span>;
  }
};

export default Loading;

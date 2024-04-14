import { useContext } from "react";
import Banner from "../../components/Banner/Banner";

import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import Estates from "../../components/Estates/Estates";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="lg:w-[85%] w-[95%] mx-auto">
        <Estates />
      </div>
    </div>
  );
};

export default Home;

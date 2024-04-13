import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Estate from "../../components/Estate/Estate";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Banner />
      <Estate />
    </div>
  );
};

export default Home;

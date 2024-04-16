import { useContext } from "react";
import Banner from "../../components/Banner/Banner";

import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import Estates from "../../components/Estates/Estates";
import OurClients from "../../components/OurClients/OurClients";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import OurLocationMap from "../../components/OurLocationMap/OurLocationMap";
import FrequentlyQuestions from "../../components/FrequentlyQuestions/FrequentlyQuestions";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Home | Al-barakah Real Estate</title>
      </Helmet>
      <Navbar />
      <Banner />
      <div className="lg:w-[85%] w-[95%] mx-auto">
        <Estates />
      </div>
      <FrequentlyQuestions />
      <OurLocationMap />
      <OurClients />
    </div>
  );
};

export default Home;

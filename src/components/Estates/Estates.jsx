import React, { useEffect, useState } from "react";
import Estate from "../Estate/Estate";

const Estates = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);
  return (
    <div className="min-h-screen mt-12  md:mt-24">
      {/* estate title & description */}
      <div className=" text-center space-y-4 md:w-1/2 mx-auto">
        <h2
          className="text-2xl md:text-4xl font-bold font-exo"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Properties For Sale & Rent
        </h2>
        <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
          Discover your ideal home for sale, or explore comfortable rental
          options to suit your lifestyle.
        </p>
      </div>
      {/* estate content */}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estates;

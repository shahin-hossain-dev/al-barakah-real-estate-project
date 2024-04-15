import React from "react";
import cover from "../../assets/cover.jpg";
import Navbar from "../shared/Navbar/Navbar";
const OurAgents = () => {
  const background = {
    backgroundImage: `linear-gradient(to right, #00000099, #00000099),url(${cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <Navbar />
      <div
        className="w-full h-[300px] md:h-[400px] relative"
        style={background}
      >
        <div className="w-full font-exo text-center text-2xl md:text-3xl text-white absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <p
            className="mb-5 font-semibold text-style"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Our Top Agents
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAgents;
<h2>Our Agents</h2>;

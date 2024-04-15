import React from "react";
import cover from "../../assets/cover.jpg";
import Navbar from "../shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Agent from "../../components/Agent/Agent";
const OurAgents = () => {
  const agents = useLoaderData();
  console.log(agents);

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
      <section className="lg:w-[85%] w-[95%] mx-auto">
        {/* Agents section title & description */}
        <div className=" text-center space-y-4 mt-12 md:mt-24 ">
          <h2
            className="text-2xl md:text-4xl font-bold font-exo"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Meet Our Expert Agents
          </h2>
          <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
            Discover our expert agents – guiding your real estate journey with
            precision and care. Trust us to unlock your property dreams.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <Agent key={agent.id} agent={agent}></Agent>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurAgents;
<h2>Our Agents</h2>;

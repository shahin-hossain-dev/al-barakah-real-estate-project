import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const OurClients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("/clients.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);
  return (
    <div className="my-12 md:my-24">
      <div>
        <h2
          className="text-2xl md:text-4xl font-bold font-exo text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Our Top Clients
        </h2>
      </div>
      <Marquee>
        <div className="mt-12 flex">
          {clients.map((client) => (
            <div
              key={client.id}
              className="card bg-base-100 shadow-xl rounded-sm border ms-10 "
            >
              <figure>
                <img src={client.image} alt="Shoes" />
              </figure>
              <div className="card-body text-center text-neutral pt-5">
                <h2 className="font-bold text-xl font-exo ">{client.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default OurClients;

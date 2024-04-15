import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";
import coverImg from "../../assets/image6.webp";
import "./EstateDetails.css";
import { FaDollarSign } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import OurLocationMap from "../OurLocationMap/OurLocationMap";

const EstateDetails = () => {
  const estates = useLoaderData();
  const estateId = useParams();
  // for page show from top when route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const estate = estates.find((estate) => estate.id === estateId.id);

  const {
    id,
    estate_title,
    image,
    location,
    price,
    segment_name,
    status,
    area,
    description,
    facilities,
  } = estate;

  // console.log(estate);
  const background = {
    backgroundImage: `linear-gradient(to right, #00000099, #00000000),url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <Helmet>
        <title>Property Details | Al-Barakah Real Estate</title>
      </Helmet>
      <Navbar />
      {/* property details banner */}
      <div
        style={background}
        className="w-full h-[300px] md:h-[500px] relative"
      >
        <div className="w-full font-exo text-center text-2xl md:text-3xl text-white absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <p
            className="mb-5 font-medium"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Property Details About
          </p>

          <p
            className="text-style font-semibold"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {estate_title}
          </p>
        </div>
      </div>
      {/* property details */}
      <div className="mt-24 w-[90%] md:[w-80%] mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-semibold font-exo">{estate_title}</h2>
          <div className="flex items-center mt-auto">
            <div className="flex items-center mt-5">
              <FaDollarSign className="text-xl" />
              <h3 className="text-xl font-semibold">
                {price}{" "}
                {status === "Rent" ? (
                  <span className="text-xl font-light text-[#876445]">
                    /year
                  </span>
                ) : (
                  <span className="text-xl font-normal text-[#876445]">
                    /project
                  </span>
                )}
              </h3>
              <span className="mx-2 md:mx-5">|</span>
              <span className="rounded-lg  px-3 py-1 top-2 right-2">
                For {status}
              </span>
              <span className="mx-2 md:mx-5">|</span>
              <div className="flex items-center gap-2 ">
                <IoLocationOutline className="text-[#876445]" />
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={image}
          alt=""
          className="w-full h-[500px] object-cover rounded-md"
        />
        <div className="mt-12">
          <h4 className="font-bold text-2xl mb-5">Description :</h4>
          <p>{description}</p>
        </div>
        {/* details overview */}
        <div className="border-b">
          <h2 className="mt-12 text-white bg-neutral inline-block rounded-md p-3">
            Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 md:w-[80%] mx-auto mt-12">
          {/* col-1 */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Property ID:</p>
              <p>{id}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold"> Price:</p>
              <div className="flex items-center">
                <FaDollarSign />
                <span>{price}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Property Type:</p>
              <p>{segment_name}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Location:</p>
              <p>{location}</p>
            </div>
          </div>
          {/* col-2 */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Area:</p>
              <p>{area}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Property status:</p>
              <p>For {status}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Facilities:</p>
              <div className="flex flex-wrap gap-2 md:flex-row">
                {facilities.map((facility, idx) => (
                  <span key={idx}>
                    {facility}
                    {facilities.length - 1 === idx ? "" : ", "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurLocationMap />
    </div>
  );
};

export default EstateDetails;

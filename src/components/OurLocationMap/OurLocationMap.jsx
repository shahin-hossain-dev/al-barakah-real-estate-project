import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./OurLocationMap.css";

const OurLocationMap = () => {
  return (
    <div>
      <div className="mt-12 md:mt-24 text-center space-y-4 md:w-1/2 mx-auto">
        <h2
          className="text-2xl md:text-4xl font-bold font-exo "
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Our Location
        </h2>
        <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
          Centrally situated in Dhaka, our office is your gateway to exceptional
          real estate experiences, conveniently accessible for all your property
          needs.
        </p>
      </div>
      <div className="mt-12 w-[90%] md:w-[85%] mx-auto border-2 p-2 ">
        <MapContainer
          center={[23.8066, 90.381425]}
          zoom={20}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution=' <a href="https://al-barakah.web.app/">Al-Barakah Real Estate Ltd.</a> '
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.8066, 90.381425]}>
            <Popup>
              <p className="text-center">
                Al-Barakah <br /> Real Estate Ltd.
              </p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default OurLocationMap;

import { IoLocationOutline } from "react-icons/io5";
import { PiHouseLineBold } from "react-icons/pi";
import { PiParallelogramBold } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const {
    id,
    estate_title,
    image,
    location,
    price,
    segment_name,
    status,
    area,
  } = estate;

  return (
    <div
      className="card shadow-xl rounded-md relative border"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <figure>
        <img
          src={image}
          alt="estate image"
          className="hover:scale-150 duration-500"
        />
      </figure>
      <div className="card-body p-4 ">
        <h2 className="card-title font-exo">{estate_title}</h2>
        <div className="flex items-center gap-2 text-gray-500">
          <IoLocationOutline className="text-[#876445]" />
          <p>{location}</p>
        </div>

        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-2">
            <PiHouseLineBold className="text-[#876445]" />
            <p>{segment_name}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <PiParallelogramBold className="text-[#876445]" />
            <p>{area}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center ">
            <FaDollarSign className="text-2xl " />
            <h3 className="text-2xl font-bold">{price}</h3>
          </div>
          <Link to={`/estate-details/${id}`}>
            <button className="btn btn-neutral">View Property</button>
          </Link>
        </div>
      </div>
      <span className="bg-neutral  text-white rounded-lg absolute px-3 py-1 top-2 right-2">
        {status}
      </span>
    </div>
  );
};

export default Estate;

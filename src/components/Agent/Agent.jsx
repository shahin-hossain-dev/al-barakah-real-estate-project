import { MdOutlineEmail } from "react-icons/md";

const Agent = ({ agent }) => {
  const { id, agent_name, agent_type, image, email } = agent;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl rounded-sm border">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-center text-neutral">
          <h2 className="font-bold text-xl font-exo ">{agent_name}</h2>
          <p className="text-[#876445]">{agent_type}</p>
          <div className="flex items-center justify-center gap-1">
            <MdOutlineEmail className="text-[#876445]" />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;

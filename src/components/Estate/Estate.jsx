const Estate = ({ estate }) => {
  const { estate_title, image, location, price, segment_name, status } = estate;

  return (
    <div
      className="card bg-base-100 shadow-xl"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <figure>
        <img src={image} alt="estate image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Estate;

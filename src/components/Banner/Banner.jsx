import React, { useState } from "react";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// AOS Package
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      className="max-h-screen mySwiper"
    >
      <SwiperSlide>
        <div className="text-white relative h-full">
          <img
            src={image5}
            className=" w-full h-[400px] md:h-[600px] lg:min-h-screen  "
            alt=""
          />
          <div className="absolute top-0 left-0 md:mt-10 lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#000000CC] to-[#00000000] ">
            <div className="flex justify-center  text-center md:text-start items-center flex-col md:items-start h-full lg:min-h-screen px-10 md:px-16">
              <div>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="text-2xl md:text-5xl lg:text-7xl font-exo mb-5"
                >
                  Welcome Home <br /> Your Trusted Residential <br /> Real
                  Estate Partner{" "}
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  className="md:w-2/3 font-openSans"
                >
                  Discover your dream home with us. From buying to selling,
                  we've got you covered. Experience personalized service and
                  expert guidance every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-white relative h-full">
          <img
            src={image1}
            className=" w-full h-[400px] md:h-[600px] lg:min-h-screen  "
            alt=""
          />
          <div className="absolute top-0 left-0 md:mt-10 lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#000000B3] to-[#00000000] ">
            <div className="flex justify-center  text-center md:text-start items-center flex-col md:items-start  h-full lg:min-h-screen px-10 md:px-16">
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-2xl md:text-5xl lg:text-7xl font-exo mb-5"
              >
                Welcome Home <br /> Your Trusted Residential <br /> Real Estate
                Partner{" "}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="md:w-2/3"
              >
                Discover your dream home with us. From buying to selling, we've
                got you covered. Experience personalized service and expert
                guidance every step of the way.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-white relative h-full">
          <img
            src={image2}
            className=" w-full h-[400px] md:h-[600px] lg:min-h-screen  "
            alt=""
          />
          <div className="absolute top-0 left-0 md:mt-10 lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#000000B3] to-[#00000000] ">
            <div className="flex justify-center  text-center md:text-start items-center flex-col md:items-start h-full lg:min-h-screen px-10 md:px-16">
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-2xl md:text-5xl lg:text-7xl font-exo mb-5"
              >
                Welcome Home <br /> Your Trusted Residential <br /> Real Estate
                Partner{" "}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="md:w-2/3"
              >
                Discover your dream home with us. From buying to selling, we've
                got you covered. Experience personalized service and expert
                guidance every step of the way.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-white relative h-full">
          <img
            src={image3}
            className=" w-full h-[400px] md:h-[600px] lg:min-h-screen  "
            alt=""
          />
          <div className="absolute top-0 left-0 md:mt-10 lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#000000B3] to-[#00000000] ">
            <div className="flex justify-center  text-center md:text-start items-center flex-col md:items-start h-full lg:min-h-screen px-10 md:px-16">
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-2xl md:text-5xl lg:text-7xl font-exo mb-5"
              >
                Welcome Home <br /> Your Trusted Residential <br /> Real Estate
                Partner{" "}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="md:w-2/3"
              >
                Discover your dream home with us. From buying to selling, we've
                got you covered. Experience personalized service and expert
                guidance every step of the way.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-white relative h-full">
          <img
            src={image4}
            className=" w-full h-[400px] md:h-[600px] lg:min-h-screen  "
            alt=""
          />
          <div className="absolute top-0 left-0 md:mt-10 lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#000000B3] to-[#00000000] ">
            <div className="flex justify-center  text-center md:text-start items-center flex-col md:items-start h-full lg:min-h-screen px-10 md:px-16">
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-2xl md:text-5xl lg:text-7xl font-exo mb-5"
              >
                Welcome Home <br /> Your Trusted Residential <br /> Real Estate
                Partner{" "}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="md:w-2/3 "
              >
                Discover your dream home with us. From buying to selling, we've
                got you covered. Experience personalized service and expert
                guidance every step of the way.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

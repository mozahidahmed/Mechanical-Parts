import React from 'react';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";



const Slider = () => {
    return (
      <div className="py-2">
        <Swiper
          pagination={true}
          className="text-white"
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/vw1tzP5/pexels-dan-cristian-p-dure-1476318-1.jpg"
              className="h-[500px] shadow-5xl"
              alt="h"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/c6ZpX2f/pexels-shane-aldendorff-924675.jpg"
              className="h-[500px] shadow-5xl"
              alt="h"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/9ts96hN/pexels-pixabay-209666.jpg"
              className="h-[500px] shadow-5xl"
              alt="h"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;
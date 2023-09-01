import React, { useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { useQuery } from 'react-query';
import Loading from "../../Shared/Loading";

const Reviews = () => {




  const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://mechanicalparts.onrender.com/reviews', {

    method: 'GET',
    headers: {
      'content-type': 'application/json'

    }

  }).then(res => res.json()))
  if (isLoading) {
    return <Loading/>
  }



  return (
    <div className="mt-16 bg-[#F73775] rounded-xl">

      <div className="py-24">
        <h1 className="text-3xl text-center text-white font-bold py-6">
          What People  <span className="text-black ">"Say"</span>  About Us
        </h1>

        <div className=" ">
          <div className="py-6 container mx-auto lg:px-0 md:px-6 px-6">
            
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {reviews?.map((review) => (
                <>
                  <SwiperSlide>
                    <div className=''>
                      <div data-aos="zoom-in" className="card  lg:max-w-lg bg-base-100 shadow-xl p-12">

                        <div className='flex'>
                          <div>
                            <div className="avatar">
                              <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} alt="NetWorkError" />
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <p className='text-orange-400 text-center flex my-3 text-xl'><span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiOutlineStar /></span></p>

                            <p className='font-bold '>{review.name}</p>
                            {review.description.slice(20.40)}
                          </div>
                        </div>



                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
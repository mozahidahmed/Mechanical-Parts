import React,{useEffect} from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';


import AOS from 'aos'
import 'aos/dist/aos.css'

const Review = ({ review }) => {
    const { name, img ,description} = review;
    useEffect(() => {
        AOS.init({duration:2000})
  
    }, []);

    return (
        <div className=''>
            <div data-aos="zoom-in"  className="card  lg:max-w-lg bg-base-100 shadow-xl p-12">
                
                <div className='flex'>
                <div>
                <div className="avatar">
                         <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img  src={img} alt="NetWorkError"/>
                        </div>
                  </div>
                </div>
                <div className="">
                <p className='text-orange-400 text-center flex my-3 text-xl'><span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiOutlineStar/></span></p>

                    <p className='font-bold '>{name}</p>
                     {description.slice(20.40)}
                </div>
                </div>



            </div>
        </div>
    );
};

export default Review;
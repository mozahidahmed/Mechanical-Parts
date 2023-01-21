import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos'
import 'aos/dist/aos.css'





const Service = ({ service }) => {
    const { _id, name,description, price, availableQuantity, minimumOrderQuantity, img } = service;

    useEffect(() => {
        AOS.init({duration:2000})
  
    }, []);

    return (
        <div>
            <div data-aos="zoom-in" className="card lg:max-w-lg bg-base-100 shadow-xl p-6">
                <figure className="px-10 pt-10 w-17">
                     <div className="avatar">
                         <div className="w-32  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img  src={img} alt="NetWorkError"/>
                        </div>
                  </div>
                </figure>
                <div className="card-body  grid justify-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className='text-black '>Available <span className='text-primary font-bold'>:{availableQuantity}</span></p>
                    <p className='text-black '>MinimumOrder <span className='text-primary font-bold'>:{minimumOrderQuantity}</span></p>
                    <p className='text-black '>Price <span className='text-primary font-bold'>:${price}</span></p>
                  

                </div>

               
            <Link to={`/buynow/${_id}`}>
             <div className="grid">
             <button className="btn-style  text-black font-bold bg-gradient-to-r from-secondary-100 to-primary w-full">Buy Now</button>

             </div>
            </Link>
               

            </div>
           
        </div>
         
    );
};

export default Service;
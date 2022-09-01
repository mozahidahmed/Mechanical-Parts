import React from 'react';
import { Link } from 'react-router-dom';





const Service = ({ service }) => {
    const { _id, name,description, price, availableQuantity, minimumOrderQuantity, img } = service;



    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
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
                   {/* <p>{description}</p> */}


                </div>

               
            <Link to={`/buynow/${_id}`}>
             <div className="grid">
             <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary-100 to-primary w-full">Buy Now</button>

             </div>
            </Link>
               

            </div>
        </div>
    );
};

export default Service;
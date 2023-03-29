import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';





const SeeAllProduct = ({ service }) => {
    const { _id, name,description, price, availableQuantity, minimumOrderQuantity, img } = service;



    return (
        <div>
            <div className="glass">
                <img src={img} alt="" className="h-[200px]"/>
                <div className="py-2 p-2">

                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <h1 className='text-2xl '>made_by_American</h1>
                </div>
                <div className="py-2 p-2 flex justify-between items-center">
                    <h1 className='text-2xl font-bold'>${price}</h1>
                    <Link to={`/buynow/${_id}`}>
                        <AiOutlineShoppingCart className='font-bold text-3xl' />
                    </Link>

                </div>

            </div> 
           
        </div>
         
    );
};

export default SeeAllProduct;
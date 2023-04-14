import React, { useEffect } from 'react';
import AOS from 'aos'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';





const SeeAllProduct = ({ service }) => {
    const { _id, name,description, price, availableQuantity, minimumOrderQuantity, img } = service;

    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, []);


    return (
        <div>
            <div data-aos="zoom-in" className="glass ">
                <img src={img} className="h-[200px]" alt="something wrong" />
                <div className="p-2">

                    <div className="flex justify-between">
                        <h2 className='text-2xl font-bold'>{name}</h2>
                        <h1 className='text-[rgb(0,208,130)]'>In Stock</h1>

                    </div>
                    <p className='text-orange-400 text-center flex my-3 text-xl'><span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiOutlineStar /></span></p>

                </div>
                <del className='p-2'>$670</del>
                <div className="p-2 flex justify-between items-center">

                    <h1 className='text-2xl font-bold text-red-500'>${price}</h1>
                    <Link to={`/buynow/${_id}`}>
                        <AiOutlineShoppingCart className='font-bold text-3xl' />
                    </Link>

                </div>

            </div>   

           
        </div>
         
    );
};

export default SeeAllProduct;
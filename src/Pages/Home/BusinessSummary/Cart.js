import React from 'react';
import {AiOutlineShoppingCart } from "react-icons/ai"

const Cart = () => {
    return (
        <div>
         
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-2">
                
                <div className="">
                <img src="https://i.ibb.co/9ts96hN/pexels-pixabay-209666.jpg" alt="" />
                <div className="py-2 p-2">
                        <h1 className='text-2xl font-bold'>made_by_American</h1>
                        <h2 className='text-2xl'>Chair</h2>
                </div>
                <div className="py-2 p-2 flex justify-between items-center">
                        <h1 className='text-2xl font-bold'>$300</h1>
                        <AiOutlineShoppingCart className='font-bold text-3xl'/>     
                </div>

               </div>



            </div>
        </div>
    );
};

export default Cart;
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos'
import 'aos/dist/aos.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';





const Service = ({ service }) => {
    const { _id, name,description, price,  img } = service;

    useEffect(() => {
        AOS.init({duration:2000})
  
    }, []);

    return (
        <div>
            
            <div className="glass">
                <img src={img} className="h-[200px]" alt="something wrong" />
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

export default Service;
    // <Link to={`/buynow/${_id}`}>

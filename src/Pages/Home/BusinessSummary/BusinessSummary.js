import React from 'react';
import {CiBadgeDollar} from "react-icons/ci"
import { AiOutlineCodeSandbox ,AiOutlineShoppingCart} from "react-icons/ai"
import { GiMonkFace} from "react-icons/gi"

const BusinessSummary = () => {
    return (
        <div>
            <h1 className="text-3xl  text-primary py-6 font-bold">
          BUSINESS <span className="text-black">SUMARY</span>
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">

          <div className="">
                    <img src="https://daraz.com/wp-content/uploads/2021/12/4.-Cutomer-1-768x512.jpg" className='h-[500px]'  alt="" />
          </div>
          <div className="">
         <img src="https://i.ibb.co/9ts96hN/pexels-pixabay-209666.jpg" className='h-[500px]' alt="" />
          </div>
         <div className="grid gap-2 justify-center items-center">
            <div className="">
                    <CiBadgeDollar className='text-5xl font-bold text-primary'/>
                <h1 className='text-3xl font-bold'>50%</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="">
                        <AiOutlineCodeSandbox className='text-5xl font-bold text-primary' />
                        <h1 className='text-3xl font-bold'>10+ million</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>


            </div>
            <div className="">
                        <AiOutlineShoppingCart className='text-5xl font-bold text-primary' />
                        <h1 className='text-3xl font-bold'>50+ million</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>


            </div>
            <div className="">
                        <GiMonkFace className='text-5xl font-bold text-primary' />
                        <h1 className='text-3xl font-bold'>about 3,000</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>


            </div>
            
         </div>


        </div>
        </div>
    );
};

export default BusinessSummary;
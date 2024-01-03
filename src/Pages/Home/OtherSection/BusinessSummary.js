
import { CiBadgeDollar } from "react-icons/ci"
import { AiOutlineCodeSandbox, AiOutlineShoppingCart } from "react-icons/ai"
import  { useEffect } from 'react';
import { GiMonkFace } from "react-icons/gi"
import img1 from '../../../assets/E_01.png'
import img2 from '../../../assets/E_02.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const BusinessSummary = () => {
    
    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, []);
    return (
        <div>
            <h1 className="text-3xl  text-primary py-6 font-bold">
                Business_<span className="text-black">Summaray</span>
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">

                <div data-aos="fade-right" className="">
                    <img src={img1} className='h-[500px]' alt="" />
                </div>
                <div data-aos="fade-right" className="">
                    <img src={img2} className='h-[500px]' alt="" />
                </div>

                <div data-aos="fade-left" className="grid gap-2 justify-center items-center">
                    <div className="">
                        <CiBadgeDollar className='text-5xl font-bold text-primary' />
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
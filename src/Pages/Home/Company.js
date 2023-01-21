import React from 'react';
import company1 from '../../assets/company-1.png'
import company2 from '../../assets/company-2.png'
import company3 from '../../assets/company-3.png'
import company4 from '../../assets/company-4.png'
import company5 from '../../assets/company-5.png'


const Company = () => {
    return (
        <div className='mt-6'>
            <div className="py-12 border-t-2 border-b-2 grid  sm:grid-cols-3 ga md:grid-cols-2 lg:grid-cols-5 gap-16 mt-2  items-center justify-center">
                
                <div className="w-[150px]">
                    <img src={company1} alt="hjghj" />
                </div>
              
                <div className="w-[150px]">
                    <img src={company2} alt="hjghj" />
                </div>
              
                <div className="w-[150px]">
                    <img src={company3} alt="hjghj" />
                </div>
              
                <div className="w-[150px]">
                    <img src={company4} alt="hjghj" />
                </div>
              
                <div className="w-[150px]">
                    <img src={company5} alt="hjghj" />
                </div>
              
                
                
            </div> 
        </div>
    );
};

export default Company;
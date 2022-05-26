import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div>
            <h1 className='text-2xl text-center text-primary font-bold mb-6'>EADUCATION</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            
            <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6 cardborder">
                <h1 className='text-2xl font-bold'>JSC</h1> 
                <h1 className='text-1xl font-bold'>SARSINA D.S KMIL MADRASAH</h1> 
                <h1 className='text-1xl font-bold'>Borishal,Bangladesh</h1> 
                 
      
                  </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6 cardborder">
                 
            <h1 className='text-2xl font-bold'>SSC</h1>   
            <h1 className='text-1xl font-bold'>SARSINA D.S KMIL MADRASAH</h1>   
            <h1 className='text-1xl font-bold'>Borishal,Bangladesh</h1>   
      
                  </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardborder">
                 
            <h1 className='text-2xl font-bold'>HSC</h1> 
            <h1 className='text-1xl font-bold'>SARSINA D.S KMIL MADRASAH</h1> 
            <h1 className='text-1xl font-bold'>Borishal,Bangladesh</h1>  
                  </div>
           
           
            </div>
        </div>
    );
};

export default Education;
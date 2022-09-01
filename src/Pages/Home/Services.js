import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([]);


useEffect(()=>{

fetch('https://intense-inlet-37114.herokuapp.com/service')
.then(res=>res.json()).then(data=>setServices(data))


},[])


    return (
        <div className='my-20'>
           <div className='text-center  '>

           <h1 className="text-3xl text-center text-primary font-bold">OUR <span className="text-black">PRODUCTS</span></h1>

           
           
           </div>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {services.map(service=>
                       
                      <Service  key={service._id} service={service}></Service>
                        )}
                    </div>





        </div>
    );
};

export default Services;
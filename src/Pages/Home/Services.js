import React from 'react';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Services = () => {
   

 



const {data:services,isLoading,refetch}=useQuery('services',()=>fetch('https://mechanicalparts.onrender.com/service',{
  
method:'GET',
headers:{
    'content-type': 'application/json'
   
}

}).then(res=>res.json()))
if(isLoading){
return <Loading></Loading>
}


    return (
        <div className='my-12'>
           <div className='text-center  '>

           <h1 className="text-3xl text-center text-primary font-bold">OUR <span className="text-black">PRODUCTS</span></h1>

           
           
           </div>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12  mx-12 justify-center'>
                        {services.slice(0,8).map(service=>
                       
                      <Service  key={service._id} service={service}></Service>
                        )}
                    </div>
<div className="flex justify-center items-center mt-2">
    <div className=""><h1 className='grid justify-center font-bold'>See more Products </h1></div>
    <Link to="seeallproducts"><div className="px-2 tir-style mx-2 fa-solid fa-shake"><BsArrowRight/></div></Link>

</div>


        </div>
    );
};

export default Services;
import React from 'react';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

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
        <div className='my-20'>
           <div className='text-center  '>

           <h1 className="text-3xl text-center text-primary font-bold">OUR <span className="text-black">PRODUCTS</span></h1>

           
           
           </div>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12  mx-12 justify-center'>
                        {services.slice(0,6).map(service=>
                       
                      <Service  key={service._id} service={service}></Service>
                        )}
                    </div>





        </div>
    );
};

export default Services;
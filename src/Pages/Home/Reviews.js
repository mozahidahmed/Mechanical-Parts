import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
   



const {data:reviews,isLoading,refetch}=useQuery('reviews',()=>fetch('https://mechanicalparts.onrender.com/reviews',{
  
method:'GET',
headers:{
    'content-type': 'application/json'
   
}

}).then(res=>res.json()))
if(isLoading){
return <Loading></Loading>
}



    return (
        <div className='mt-16'>

            <h1 className="text-3xl text-center text-primary font-bold">CUSTOMER <span className="text-black">REVIEWS</span></h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-12 justify-center'>
                {
                 reviews.map(review=><Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
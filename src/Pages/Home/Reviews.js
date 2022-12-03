import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([]);


useEffect(()=>{

fetch('https://mechanicalparts.onrender.com/reviews')
.then(res=>res.json()).then(data=>setReviews(data))


},[])


    return (
        <div className='mt-16'>

            <h1 className="text-3xl text-center text-primary font-bold">CUSTOMER <span className="text-black">REVIEWS</span></h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-12 justify-center'>
                {
                 reviews.map(review=><Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
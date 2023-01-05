import React from 'react';

const Review = ({ review }) => {
    const { name, img ,description} = review;

    return (
        <div className=''>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl p-12">
                
                <div className='flex'>
                <div>
                <div className="avatar">
                         <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img  src={img} alt="NetWorkError"/>
                        </div>
                  </div>
                </div>
                <div className="">
                    <p className='font-bold '>{name}</p>
                     {description.slice(20.40)}
                </div>
                </div>



            </div>
        </div>
    );
};

export default Review;
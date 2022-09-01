import React from 'react';

const BussnesSummary = () => {

   
   
 

    return (

        <div className='mt-12'>
   
            <h1 className="text-3xl text-center text-primary font-bold">BUSSENESS <span className="text-black">SUMARY</span></h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12  mx-12 justify-center'>
                
                {/* .................................................................... */}
                <div className=''>
                    <div class="card w-96 bg-base-100 shadow-xl grid grid-cols justify-center p-10">
                      <div>
                      <div className="avatar">
                             <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img  src=" https://i.ibb.co/7nP30dP/pepole-pepole.png" alt="NetWorkError"/>
                            </div>
                      </div>
                      </div>
                      <div>
                      <p className='text-2xl font-bold text-primary'>Pepole</p>
                      <p className='text-2xl font-bold'>321M+</p>
                      </div>
    
                    </div>
    
                </div>
                {/* .................................................................... */}
                {/* .................................................................... */}
                <div className=''>
                    <div class="card w-96 bg-base-100 shadow-xl grid grid-cols justify-center p-10">
                      <div>
                      <div className="avatar">
                             <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img  src="   https://i.ibb.co/gPh9xh7/like-like.jpg" alt="NetWorkError"/>
                            </div>
                      </div>
                      </div>
                      <div>
                      <p className='text-2xl font-bold text-primary'>Likes</p>
                      <p className='text-2xl font-bold'>2452M+</p>
                      </div>
    
                    </div>
    
                </div>
                {/* .................................................................... */}
                {/* .................................................................... */}
                <div className=''>
                    <div class="card w-96 bg-base-100 shadow-xl grid grid-cols justify-center p-10">
                      <div>
                      <div className="avatar">
                             <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img  src=" https://i.ibb.co/FbDmtxf/shaire-shaire.png" alt="NetWorkError"/>
                            </div>
                      </div>
                      </div>
                      <div>
                      <p className='text-2xl font-bold text-primary'>Share</p>
                      <p className='text-2xl font-bold'>969K+</p>
                      </div>
    
                    </div>
    
                </div>
                {/* .................................................................... */}
    
    
            </div>
        </div>


    );
};

export default BussnesSummary;
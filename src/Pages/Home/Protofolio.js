import React from 'react';
import Education from './Education';
import Skill from './Skill';



const Protofolio = () => {
    return (
        <div className='grid grid-cols mt-6'>
            <div className='flex justify-center'>
            <div class="hero  bg-base-200 p-32">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="avatar">
                        <div class="w-64 mask mask-hexagon">
                            <img src="https://i.ibb.co/4SWW1VJ/mozahid-mozahid.jpg" alt="sorry" />
                        </div>
                    </div>



                    <div>
                        <h1 class="text-5xl font-bold">I'm <span className='text-primary'>MOZAHID</span></h1>
                        <p class="py-6 font-bold text-primary text-2xl">Web Developer</p>


                    </div>
                </div>
            </div>
            </div>



            <div className='mt-12  px-12'>
             <Education></Education>
            </div>




            <div className='mt-12  px-12'>
               <Skill></Skill>
            </div>


        </div>
    );
};

export default Protofolio;
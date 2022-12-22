import React from 'react';
import Education from './Education';
import Skill from './Skill';



const Protofolio = () => {
    return (
   
      <div className="">
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-2  items-center'>

          <div>
            
          <img src="https://i.ibb.co/rfXkJZx/20220915-150119.jpg" class="w-50 shadow-5xl" />
          </div>

            <div className="">
            <h1 class="mb-5 text-2xl font-bold">Who am I?</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab sed, corrupti incidunt aliquam nisi est iure ipsa eum commodi veritatis ea ipsam quia delectus rem perspiciatis culpa voluptas dolorum. Officia, eum 
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab sed, corrupti incidunt aliquam nisi est iure ipsa eum commodi veritatis ea ipsam quia delectus rem perspiciatis culpa voluptas dolorum. Officia, eum 


        
    </p>
         
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
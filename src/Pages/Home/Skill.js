import React from 'react';
import './Skill.css';

const Skill = () => {



   





    return (
        <div>
            <h1 className='text-2xl text-center text-primary font-bold mb-6'>SKILL</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6 cardborder2">
                   
                <div class="avatar">
                        <div class="w-24 rounded">
                            <img src="https://i.ibb.co/7SN7XBs/html.png" />
                        </div>
                    </div>
                   
                    <h1 className='text-2xl font-bold'>80%</h1>
                   


                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6 cardborder2">

                    <div class="avatar">
                        <div class="w-24 rounded">
                            <img src="https://i.ibb.co/mbfCPjT/css.png" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold'>80%</h1>


                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardborder2">


 
                <div class="avatar">
                        <div class="w-24 rounded">
                            <img src="https://i.ibb.co/tpkmqRP/gavascript.png" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold'>75%</h1>
                    
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardborder2">



                <div class="avatar">
                        <div class="w-24 rounded">
                            <img src="https://i.ibb.co/Vx0Gp8w/node.png" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold'>60%</h1>
                    
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardborder2">

                <div class="avatar">
                        <div class="w-24 rounded">
                            <img src="https://i.ibb.co/nqyfMD7/mongodb.jpg" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold'>60%</h1>
                   
                </div>


                <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6  cardborder2">

                <div class="avatar">
                        <div class="w-24 rounded">
                            <img src=" https://i.ibb.co/jJmPr1W/firebase.png" />
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold'>70%</h1>

                </div>


            </div>
        </div>
    );
};

export default Skill;
import React,{useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutTeam = () => {
    useEffect(() => {
        AOS.init({duration:2000})
  
    }, []);
    return (
        <div className=' mt-16 mb-16'>
            <h1 className="lg:text-3xl text-center text-primary font-bold">Contact_with_ OUR_%<span className="text-black">TEAM</span></h1>


            {/* .............................................................. */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12   '>



                {/* ......................... */}
                <div data-aos="zoom-in"  className="card w-84 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="mask mask-circle w-[150px]" src="https://i.ibb.co/Rp4khnx/pngwing-com.png" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rana Akash</h2>
                        <p className="text-primary font-bold">CEO & Founder</p>

                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin text-primary p-4 text-2xl "></i>

                        </div>

                    </div>
                </div>
                {/* ......................... */}
                {/* ......................... */}
                <div data-aos="zoom-in"  className="card w-84 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="mask mask-circle w-[150px]" src="https://i.ibb.co/Rp4khnx/pngwing-com.png" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rana Akash</h2>
                        <p className="text-primary font-bold">CEO & Founder</p>

                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin text-primary p-4 text-2xl "></i>

                        </div>

                    </div>
                </div>
                {/* ......................... */}
                {/* ......................... */}
                <div data-aos="zoom-in"  className="card w-84 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="mask mask-circle w-[150px]" src="https://i.ibb.co/Rp4khnx/pngwing-com.png" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Masud Rana</h2>
                        <p className="text-primary font-bold">Chief Operating Officer</p>


                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin text-primary p-4 text-2xl "></i>

                        </div>
                    </div>
                </div>
                {/* ......................... */}

                {/* ......................... */}
                <div data-aos="zoom-in"  className="card w-84 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-25%">
                        <img className="mask mask-circle w-[150px]" src="https://i.ibb.co/Rp4khnx/pngwing-com.png" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mozahid Ahmed</h2>
                        <p className="text-primary font-bold">Manager</p>


                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin text-primary p-4 text-2xl "></i>

                        </div>
                    </div>
                </div>
                {/* ......................... */}






            </div>
            {/* .............................................................. */}


        </div>
    );
};

export default AboutTeam;

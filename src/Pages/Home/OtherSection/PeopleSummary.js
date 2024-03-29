import React,{useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'



const PeopleSummary = () => {

   
    useEffect(() => {
        AOS.init({duration:2000})
  
    }, []);
 

    return (
      <div className="">
        <h1 className="text-3xl  text-primary py-6 font-bold">
          PEOPLE <span className="text-black">SUMARY</span>
        </h1>
        <div className=" bg-[#FFC73B] rounded-xl">
          

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12  mx-12 justify-center">
            {/* .................................................................... */}
            <div data-aos="zoom-in" className="">
              <div class="card w-96 bg-base-100  shadow-xl grid grid-cols justify-center p-5">
                <div>
                  <div className="avatar">
                    <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src=" https://i.ibb.co/7nP30dP/pepole-pepole.png"
                        alt="NetWorkError"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">Pepole</p>
                  <p className="text-2xl font-bold">321M+</p>
                </div>
              </div>
            </div>
            {/* .................................................................... */}
            {/* .................................................................... */}
            <div data-aos="zoom-in" className="">
              <div class="card w-96 bg-base-100 shadow-xl grid grid-cols justify-center p-5">
                <div>
                  <div className="avatar">
                    <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="   https://i.ibb.co/gPh9xh7/like-like.jpg"
                        alt="NetWorkError"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">Likes</p>
                  <p className="text-2xl font-bold">2452M+</p>
                </div>
              </div>
            </div>
            {/* .................................................................... */}
            {/* .................................................................... */}
            <div data-aos="zoom-in" className="">
              <div class="card w-96 bg-base-100 shadow-xl grid grid-cols justify-center p-5">
                <div>
                  <div className="avatar">
                    <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src=" https://i.ibb.co/FbDmtxf/shaire-shaire.png"
                        alt="NetWorkError"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">Share</p>
                  <p className="text-2xl font-bold">969K+</p>
                </div>
              </div>
            </div>
            {/* .................................................................... */}
          </div>
        </div>
      </div>
    );
};

export default PeopleSummary;
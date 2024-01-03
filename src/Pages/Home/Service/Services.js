import React from 'react';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Services = () => {






    const { data: services, isLoading, refetch } = useQuery('services', () => fetch('https://mechanicalparts.onrender.com/service', {

        method: 'GET',
        headers: {
            'content-type': 'application/json'

        }

    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='my-12'>
            <div className='text-center  '>

                <h1 className="lg:text-3xl text-center text-primary font-bold">Our_Available<span className="text-black">_Products</span></h1>



            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12  mx-12 justify-center'>
                {services.slice(0, 8).map(service =>

                    <Service key={service._id} service={service}></Service>
                )}
            </div>
            <div className="flex justify-center items-center mt-2">
                
                <Link to="/products">
                     <div className="grid justify-center mt-4 h1p">
          <button type="button" class="bg-gray-500 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-primary hover:text-white px-3">
            <div class="flex flex-row align-middle">
              <span class="mr-2">Let's  More Products</span>
              <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </button>
        </div>
                </Link>

            </div>


        </div>
    );
};

export default Services;
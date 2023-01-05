import React from 'react';
import AboutTeam from './AboutTeam';
import Hero from './Hero';
import BussnesSummary from './BussnesSummary';
import Reviews from './Reviews';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div className='px-6'>
               <Slider></Slider>
               <Hero></Hero>
               <Services></Services>
               <BussnesSummary></BussnesSummary>
               <Reviews></Reviews>
               <AboutTeam></AboutTeam>

        </div>
    );
};

export default Home;
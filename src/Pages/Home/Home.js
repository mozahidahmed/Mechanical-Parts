import React from 'react';
import AboutTeam from './AboutTeam';
import Hero from './Hero';
import BussnesSummary from './BussnesSummary';
import Reviews from './Reviews';
import Services from './Services';
import Slider from './Slider';
import JoinOurCompany from './JoinOurCompany';
import Company from './Company';


const Home = () => {
    return (
        <div className='px-6'>
               <Slider></Slider>
               <Hero></Hero>
               <Services></Services>
               <BussnesSummary></BussnesSummary>
               <Reviews></Reviews>
            
               <AboutTeam></AboutTeam>
               <JoinOurCompany/>
               <Company/>

        </div>
    );
};

export default Home;
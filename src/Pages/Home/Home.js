import React from 'react';
import AboutTeam from './AboutTeam';
import Reviews from './Reviews';
import Services from './Services';
import Slider from './Slider';
import JoinOurCompany from './JoinOurCompany';
import Company from './Company';
import AboutUs from './AboutUs';
import LatestProduct from './LatestProduct';




const Home = () => {
    return (
      <div className="px-6">
        <Slider></Slider>

        <Services></Services>
        <LatestProduct />
        <AboutUs />
    
        <Reviews></Reviews>

        <AboutTeam></AboutTeam>
        <JoinOurCompany />
        <Company />
      </div>
    );
};

export default Home;
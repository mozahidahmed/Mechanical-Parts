import React from 'react';
import AboutTeam from './AboutTeam';
import Reviews from './Reviews';
import Services from './Services';
import Slider from './Slider';
import JoinOurCompany from './JoinOurCompany';
import Company from './Company';
import AboutUs from './AboutUs';
import LatestProduct from './LatestProduct';
import Categories from './Categories';




const Home = () => {
    return (
      <div className="">
        <Slider></Slider>

        <div className="px-6">
          <Categories/>
          <Services></Services>
          <LatestProduct />
          <AboutUs />

          <Reviews></Reviews>

          <AboutTeam></AboutTeam>
          <JoinOurCompany />
          <Company />
        </div>
      </div>
    );
};

export default Home;
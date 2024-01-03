import React from 'react';
import AboutTeam from './OtherSection/AboutTeam';
import Reviews from './Review/Reviews';
import Services from './Service/Services';
import Slider from '../Home/OtherSection/Slider';
import JoinOurCompany from '../Home/OtherSection/JoinOurCompany';
import Company from '../Home/OtherSection/Company';
import AboutUs from '../Home/OtherSection/AboutUs';
import LatestProduct from '../Home/OtherSection/LatestProduct';
import Categories from '../Home/OtherSection/Categories';




const Home = () => {
  return (
    <div className="">
      <Slider></Slider>

      <div className="px-6">
        <Categories />
        <Services></Services>
        <AboutUs />

        <Reviews></Reviews>

        <AboutTeam></AboutTeam>
        <JoinOurCompany />
        {/* <Company /> */}
      </div>
    </div>
  );
};

export default Home;
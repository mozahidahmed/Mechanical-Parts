import React from "react";
import { Link } from "react-router-dom";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import PeopleSummary from "./PeopleSummary";
import SixCard from "./SixCard";

const AboutUs = () => {
  return (
    <div className=" bg-gray-200 px-6 p-5 rounded-xl">
      <p className="font-bold text-center mt-6 text-[red]">About Us</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 py-12  justify-center items-center ">
        <div className="flex justify-center ">
          <img
            src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/about-image.png"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="lg:text-5xl font-bold mb-4 ">Good_service_company</h1>

          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            iure natus, fugit impedit eaque maiores recusandae dicta distinctio
            necessitatibus nam.
          </p>
          <h1 className="font-bold text-1xl mb-2">
            Internationally certified teachers
          </h1>
          <h1 className="font-bold text-1xl mb-2">
            Always updating the learning curriculum system
          </h1>
          <h1 className="font-bold text-1xl mb-2">
            Promoting positive child development
          </h1>
          <h1 className="font-bold text-1xl">Accredited “A” since 2015</h1>
          <Link to="/login">

            <button className="btn btn-outline mt-4">Ready the start</button>
          </Link>
        </div>
      </div>
      <SixCard />
      <BusinessSummary/>
      <PeopleSummary />
    </div>
  );
};

export default AboutUs;

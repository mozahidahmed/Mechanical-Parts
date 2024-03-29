import React from "react";
import { Link } from "react-router-dom";

const JoinOurCompany = () => {
  return (
    <div className="bg-primary rounded-full-style">
      <div className="p-12 py-24 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-32 mt-2  items-center justify-center">
        <div className="text-white">
          <h1 class="mb-5 text-2xl font-bold">Ready to join?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel
            minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab
            sed
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-accent register-btn-style ">Register</button>
        </div>
      </div>
    </div>
  );
};

export default JoinOurCompany;

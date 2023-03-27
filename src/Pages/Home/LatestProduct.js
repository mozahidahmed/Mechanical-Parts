import React from 'react';

const latestProduct = () => {
    return (
      <div>
        <div className="py-6">
          <h1 className="text-2xl font-bold ms-2">Our_latest_product</h1>
          <div className="carousel carousel-center w-full py-2 space-x-4 rounded-box">
            <div className="carousel-item h-[150px]">
              <img
                src="https://i.ibb.co/dMPWdzZ/5.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item h-[150px]">
              <img
                src="https://i.ibb.co/MMh6dbQ/4.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item h-[150px]">
              <img
                src="https://i.ibb.co/NVHCmF9/6.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item h-[150px]">
              <img
                src="https://i.ibb.co/dMPWdzZ/5.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item h-[150px]">
              <img
                src="https://i.ibb.co/MMh6dbQ/4.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item h-[150px]">
              <img
                src="https://i.ibb.co/MMh6dbQ/4.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item h-[150px]">
              <img
                src="https://i.ibb.co/MMh6dbQ/4.jpg"
                className="rounded-box"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default latestProduct;
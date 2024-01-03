import { Link } from 'react-router-dom';
import img1 from '../../../assets/01.png'

const latestProduct = () => {
    return (
      <div>
        <div className="py-6">
          <h1 className="text-2xl font-bold ms-2 mb-2">Our_latest_product</h1>
          <div className="carousel carousel-center w-full py-2 space-x-4  border-2">
            <div className="carousel-item h-[150px] border-1">
              <Link to="/products">
              <img
                src="https://i.ibb.co/dMPWdzZ/5.jpg"
                className=""
                alt=""
              / >
              </Link>  
            </div>
            <div className="carousel-item h-[150px]">
              <Link to="/products">

              <img
                src="https://i.ibb.co/MMh6dbQ/4.jpg"
                className=""
                alt=""
              />
              </Link>
            </div>
            <div className="carousel-item h-[150px]">
                 <Link to="/products">
              <img
                src="https://i.ibb.co/NVHCmF9/6.jpg"
                className=""
                alt=""
              />
              </Link>
            </div>
            <div className="carousel-item h-[150px]">
              <Link to="/products">  <img
                src="https://i.ibb.co/dMPWdzZ/5.jpg"
                className=""
                alt=""
              /></Link>
            </div>
            <div className="carousel-item h-[150px]">
              <Link to="/products"> <img
                src="https://i.ibb.co/MMh6dbQ/4.jpg"
                className=""
                alt=""
              /></Link>
            </div>
            <div className="carousel-item h-[150px]">
              <Link to="/products">  <img
                src="https://i.ibb.co/MMh6dbQ/4.jpg"
                className=""
                alt=""
              /></Link>
            </div>
            <div className="carousel-item h-[150px]">
              <Link to="/products"><img
                src="https://i.ibb.co/MMh6dbQ/4.jpg"
                className=""
                alt=""
              /></Link> 
            </div>
          </div>
        </div>
      </div>
    );
};

export default latestProduct;
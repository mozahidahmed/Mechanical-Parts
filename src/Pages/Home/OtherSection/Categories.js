import { Link } from 'react-router-dom';
import img from '../../../assets/777-jpg-612_459--removebg-preview.png'
import img2 from '../../../assets/mozahid-webMI-mozahid-webmi-_-ImgBB-_-Page-3-removebg-preview.png'
import img3 from '../../../assets/mozahid-webMI-mozahid-webmi-_-ImgBB-_-Page-3-removebg-preview.png'

const Categories = () => {
    return (
        <div className='mt-6'>
            <h1 className='font-bold text-2xl mb-6'>Our_Good_Categories</h1>
            <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-2 border">
                <div className="grid justify-center border">
                 <Link to="/products">
                   <div className="p-5">
                        <div className='border rounded-xl p-2 bg-yellow-400  '>
                            <img src={img} alt=""  />

                        </div>
                        <div className="mt-2 hover:text-[#F73775]">
                            <h1 className="text-center font-bold">Auto Safety & Security</h1>
                            <h1 className="text-center ">88 items</h1>

                        </div>
                   </div>
                 </Link>
                </div>
                <div className="grid justify-center border">
                    <Link to="/products">
                   <div className="p-5">
                        <div className='border rounded-xl p-2 bg-[#F73775]'>
                            <img src={img2} alt="" />

                        </div>
                        <div className="mt-2 hover:text-[#F73775]">
                            <h1 className="text-center font-bold">Garage Tools</h1>
                            <h1 className="text-center ">38 items</h1>

                        </div>
                   </div>
                    </Link>
                </div>
                <div className="grid justify-center border">
                    <Link to="/products">
                   <div className="p-5">
                        <div className='border rounded-xl p-2 bg-yellow-400'>
                            <img src={img} alt="" />

                        </div>
                        <div className="mt-2 hover:text-[#F73775]">
                            <h1 className="text-center font-bold">Headlights & Lighting</h1>
                            <h1 className="text-center ">18 items</h1>

                        </div>
                   </div>
                    </Link>
                </div>
                <div className="grid justify-center border">
                    <Link to="/products">
                   <div className="p-5">
                        <div className='border rounded-xl p-2 bg-[#F73775]'>
                            <img src={img3} alt="" />

                        </div>
                        <div className="mt-2 hover:text-[#F73775]">
                            <h1 className="text-center font-bold">Interior Accessories</h1>
                            <h1 className="text-center ">12 items</h1>

                        </div>
                   </div>
                    </Link>
                </div>
                <div className="grid justify-center border">
                    <Link to="/products">
                    <div className="p-5">
                        <div className='border rounded-xl p-2 bg-yellow-400'>
                            <img src={img} alt="" />

                        </div>
                        <div className="mt-2 hover:text-[#F73775]">
                            <h1 className="text-center font-bold">Tires & Wheels</h1>
                            <h1 className="text-center ">29 items</h1>

                        </div>
                    </div>
                    </Link>
                </div>

            </div>
            


        </div>
    );
};

export default Categories;
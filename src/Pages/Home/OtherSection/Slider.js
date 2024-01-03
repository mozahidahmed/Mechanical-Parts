import img from '../../../assets/777-jpg-612_459--removebg-preview.png'



const Slider = () => {
    return (
    <div className=" bg-black px-6 py-12 grid items-center ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12  lg:py-6 justify-center items-center">
          <div className='text-white'>
            <h1 className="lg:text-5xl font-bold mb-4 ">
              Mechanical_parts.com
            </h1>

            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              veritatis praesentium quas optio facilis rerum possimus, culpa eum
              aliquam pariatur neque repellat ratione exercitationem iusto.
              Recusandae, repudiandae laborum? Ipsa, ea.
            </p>
            <button className="btn btn-outline hover:bg-[#F73775]  text-white">Shop Now Your Product</button>
          </div>
          <div className="flex justify-center">
            <img
              src={img}
              alt="ERROR"
              className=''

              
            />
          </div>
        </div>
      </div>
   
    );
};

export default Slider;
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'



const SixCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })

  }, []);
  return (
    <div className="mt-6">
        <h1 className="font-bold text-2xl">Activity</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  py-6 justify-center items-center">
        <div data-aos="fade-leftt" className="flex bg-base-100 rounded-lg p-6">
          <div className="p-4">
            <img
              src="	https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/icon-book.png"
              alt=""
            />
          </div>
          <div  className="p-2 hover:text-[#F73775]">
            <h1 className="font-bold">24 Hours Library</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="flex bg-base-100 rounded-lg p-6">
          <div className="p-4">
            <img
              src="	https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/icon-ball.png"
              alt=""
            />
          </div>
          <div className="p-2 hover:text-[#F73775]">
            <h1 className="font-bold">Home Serices</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="flex bg-base-100 rounded-lg p-6">
          <div className="p-4">
            <img
              src="https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/icon-higine.png"
              alt=""
            />
          </div>
          <div  className="p-2 hover:text-[#F73775]">
            <h1 className="font-bold">Offices Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="flex bg-base-100 rounded-lg p-6">
          <div className="p-4">
            <img
              src="	https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/icon-social.png"
              alt=""
            />
          </div>
          <div data-aos="fade-right" className="p-2 hover:text-[#F73775]">
            <h1 className="font-bold">Country Seies</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="flex bg-base-100 rounded-lg p-6">
          <div className="p-4">
            <img
              src="		https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/icon-staff.png"
              alt=""
            />
          </div>
          <div  className="p-2 hover:text-[#F73775]">
            <h1 className="font-bold">Quickly Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="flex bg-base-100 rounded-lg p-6">
          <div className="p-4">
            <img
              src="		https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/icon-teachers.png"
              alt=""
            />
          </div>
          <div className="p-2 hover:text-[#F73775]">
            <h1 className="font-bold">Save Your Product</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixCard;

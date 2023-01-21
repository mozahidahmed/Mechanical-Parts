import React from "react";
import loading from "../../assets/loading.gif";
const Loading = () => {
  const style = {
    background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%)`,
  };

  return (
    <div className='relative flex justify-center items-center h-screen w-full'>
      <div style={style} className=' h-[200px] w-[200px] absolute top-0'></div>
      <img  src={loading} className='h-[200px] w-[200px]' alt='' />
    </div>
  );
};

export default Loading;
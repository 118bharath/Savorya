import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundImage: "url('/header_img.png')"
  };

  return (
    <div
      className='h-[34vw] my-8 mx-auto bg-cover bg-center relative rounded-[30px]'
      style={headerStyle}
    >
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[65%] md:max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className='font-medium text-white text-[max(4.5vw,22px)]'>
          Order your favourite food here
        </h2>
        <p className='hidden md:block text-white text-[1vw]'>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button className='border-none text-[#747474] font-medium py-[2vw] px-[4vw] md:py-[1vw] md:px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-full'>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
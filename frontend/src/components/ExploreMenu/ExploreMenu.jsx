import React from 'react';
import { menu_list } from '../../assets/frontend_assets/assets'; 

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col gap-5 px-4 md:px-8' id='explore-menu'>
        <h1 className="text-[#262626] font-medium text-3xl">Explore Our Menu</h1>
        <p className='max-w-full md:max-w-[60%] text-[#808080]'>
            Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <div className='flex justify-between items-center gap-8 text-center my-5 overflow-x-auto pb-4 scrollbar-hide'>
            {menu_list.map((item, index) => {
                return (
                    <div 
                        onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                        key={index} 
                        className='flex-shrink-0'
                    >
                        <img 
                            className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all duration-200 ${category === item.menu_name ? "border-4 border-tomato p-0.5" : ""}`} 
                            src={item.menu_image} 
                            alt={item.menu_name} 
                        />
                        <p className='mt-2.5 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className="my-2.5 h-0.5 bg-gray-200 border-none" />
    </div>
  );
};

export default ExploreMenu;
import React from 'react';
import { menu_list } from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';

const ExploreMenu = ({ category, setCategory }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-5 px-4 md:px-8' id='explore-menu'>
            <h1 className="text-[#262626] font-medium text-3xl">Explore Our Menu</h1>
            <p className='max-w-full md:max-w-[60%] text-[#808080]'>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <div className='relative w-full overflow-hidden my-5 group'>
                <div className='flex gap-8 animate-scroll hover:pause'>
                    {[...menu_list, ...menu_list].map((item, index) => {
                        return (
                            <div
                                onClick={() => navigate(`/category/${item.menu_name}`)}
                                key={index}
                                className='flex-shrink-0 flex flex-col items-center cursor-pointer transition-transform hover:scale-105'
                            >
                                <img
                                    className={`w-[7.5vw] min-w-[80px] rounded-full object-cover shadow-sm hover:shadow-md transition-all duration-300 ${category === item.menu_name ? "border-4 border-orange-500 p-0.5" : "border border-gray-100"}`}
                                    src={item.menu_image}
                                    alt={item.menu_name}
                                />
                                <p className='mt-3 text-[#555] font-medium text-[max(1.2vw,14px)]'>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
                {/* Gradient Overlays for smooth fade effect */}
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
            <hr className="my-2.5 h-0.5 bg-gray-200 border-none" />
        </div>
    );
};

export default ExploreMenu;
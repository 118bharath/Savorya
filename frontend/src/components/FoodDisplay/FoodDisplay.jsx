import React from 'react';
import { Link } from 'react-router-dom';

const FoodDisplay = ({ category, restaurants, isLoading, error }) => {
  console.log("Props received in FoodDisplay.jsx:", restaurants);

  if (isLoading) {
    return <p className="text-center my-10">Loading restaurants...</p>;
  }

  if (error) {
    return <p className="text-center my-10 text-red-500">{error}</p>;
  }

  // Limit to first 10 items for the "preview" section
  const displayLimit = 10;
  const filteredRestaurants = category === "All"
    ? restaurants
    : restaurants.filter(item => item.cuisine === category);

  const limitedRestaurants = filteredRestaurants.slice(0, displayLimit);

  return (
    <div className='mt-8 px-4 md:px-8' id='food-display'>
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-[max(2vw,24px)] font-semibold text-[#262626]">Top Restaurants Near You</h2>
        {filteredRestaurants.length > displayLimit && (
          <Link to="/category/All" className="text-orange-500 font-medium text-sm hover:underline cursor-pointer">See All</Link>
        )}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-8 row-gap-12">
        {limitedRestaurants.map((restaurant) => (
          <Link key={restaurant._id} to={`/restaurant/${restaurant._id}`}>
            <div className='w-full mx-auto rounded-[15px] shadow-lg transition-all duration-300 animate-fadeIn hover:shadow-xl hover:-translate-y-1 bg-white border border-gray-100'>
              <div className="relative overflow-hidden rounded-t-[15px]">
                <img className='w-full h-44 object-cover hover:scale-105 transition-transform duration-500' src={restaurant.imageUrl || restaurant.image || 'https://via.placeholder.com/300'} alt={restaurant.name} />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-sm">
                  <span className="text-xs font-bold text-green-600">★ {restaurant.rating || 4.2}</span>
                </div>
              </div>
              <div className='p-4'>
                <div className='flex justify-between items-start'>
                  <p className="text-lg font-bold text-gray-800 line-clamp-1">{restaurant.name}</p>
                </div>
                <p className="text-gray-500 text-sm mt-1 mb-2">{restaurant.cuisine}</p>
                <div className='flex justify-between items-center mt-3 pt-3 border-t border-gray-100'>
                  <span className='text-xs text-gray-400 font-medium'>{restaurant.address || "Hyderabad"}</span>
                  <span className='text-xs text-orange-500 font-medium'>View Menu</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredRestaurants.length === 0 && <p className="text-center my-10 text-gray-500">No restaurants found for this category.</p>}
    </div>
  );
};

export default FoodDisplay;
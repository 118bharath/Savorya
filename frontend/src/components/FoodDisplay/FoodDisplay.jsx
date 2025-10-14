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

  const filteredRestaurants = restaurants.filter(restaurant => {
    if (category === "All") {
      return true;
    }
    return restaurant.cuisine.toLowerCase() === category.toLowerCase();
  });

  return (
    <div className='mt-8 px-4 md:px-8' id='food-display'>
      <h2 className="text-[max(2vw,24px)] font-semibold">Top Restaurants Near You</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-8 row-gap-12">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant._id} to={`/restaurant/${restaurant._id}`}>
            <div className='w-full mx-auto rounded-[15px] shadow-lg transition-all duration-300 animate-fadeIn hover:shadow-xl'>
              <div className="relative">
                <img className='w-full rounded-t-[15px] h-40 object-cover' src={restaurant.image || 'https://via.placeholder.com/300'} alt={restaurant.name} />
              </div>
              <div className='p-5'>
                <p className="text-xl font-medium">{restaurant.name}</p>
                <p className="text-gray-500 text-xs mt-2">{restaurant.cuisine}</p>
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
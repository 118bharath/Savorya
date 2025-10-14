import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import restaurantService from '../services/restaurantService';
import FoodItem from '../components/FoodItem/FoodItem'; 

const RestaurantMenuPage = () => {
  const { id: restaurantId } = useParams(); // Get id from url
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // This logic fetches the data for this specific page
  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const data = await restaurantService.getRestaurantById(restaurantId);
        setRestaurant(data.restaurant);
        setMenu(data.menu);
      } catch (err) {
        setError('Could not fetch restaurant details.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchRestaurantDetails();
  }, [restaurantId]);

  if (isLoading) return <p className="text-center my-10">Loading menu...</p>;
  if (error) return <p className="text-center my-10 text-red-500">{error}</p>;
  if (!restaurant) return <p className="text-center my-10">Restaurant not found.</p>;

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      {/* Restaurant Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800">{restaurant.name}</h1>
          <p className="text-gray-500 mt-2">{restaurant.cuisine}</p>
          <p className="text-gray-500 text-sm">{restaurant.address}</p>
      </div>

      {/* Menu Listing */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Full Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menu.length > 0 ? (
              menu.map((item) => (
                <FoodItem key={item._id} item={item} />
              ))
            ) : (
              <p>No menu items available at the moment.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
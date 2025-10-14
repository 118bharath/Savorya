import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import restaurantService from '../../services/restaurantService'; 

const Home = () => {
  const [category, setCategory] = useState('All');

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const data = await restaurantService.getAllRestaurants();
        console.log("Data fetched in Home.jsx:", data);
        setRestaurants(data);
      } catch  {
        setError('Could not fetch restaurants.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllRestaurants();
  }, []);

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      
      <FoodDisplay 
        category={category} 
        restaurants={restaurants} 
        isLoading={isLoading} 
        error={error} 
      />
    </div>
  );
};

export default Home;
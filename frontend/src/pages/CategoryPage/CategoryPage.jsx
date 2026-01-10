import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurantService from '../../services/restaurantService';
import { assets } from '../../assets/frontend_assets/assets';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const data = await restaurantService.getAllRestaurants();
                // Filter by cuisine (if not ALL) and Sort by rating (descending)
                const filtered = data
                    .filter(item => categoryName === "All" ? true : item.cuisine.toLowerCase() === categoryName.toLowerCase())
                    .sort((a, b) => (b.rating || 0) - (a.rating || 0));

                setRestaurants(filtered);
            } catch (error) {
                console.error("Error fetching category data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchRestaurants();
    }, [categoryName]);

    return (
        <div className='w-[90%] mx-auto mt-10 min-h-[60vh]'>
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate(-1)} className='p-2 rounded-full hover:bg-gray-100 transition-colors'>
                    <img src={assets.cross_icon} className="rotate-45 w-4" alt="back" />
                </button>
                <h2 className='text-3xl font-semibold text-[#262626] capitalize'>{categoryName} details</h2>
            </div>

            {isLoading ? (
                <div className="flex justify-center mt-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                </div>
            ) : restaurants.length === 0 ? (
                <div className="text-center mt-20 text-gray-500">
                    <p className="text-xl">No quality restaurants found for {categoryName}.</p>
                    <button onClick={() => navigate('/')} className="mt-4 text-orange-500 hover:underline">Explore all options</button>
                </div>
            ) : (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
                    {restaurants.map((restaurant) => (
                        <div
                            key={restaurant._id}
                            onClick={() => navigate(`/restaurant/${restaurant._id}`)}
                            className='group cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden border border-gray-100'
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                    src={restaurant.imageUrl || restaurant.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop'}
                                    alt={restaurant.name}
                                />
                                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
                                    <span className="text-sm font-bold text-green-600">{restaurant.rating || 4.2}</span>
                                    <img src={assets.rating_starts} className="w-16 h-4 object-contain hidden" alt="stars" />
                                    <span className="text-xs text-gray-400">★</span>
                                </div>
                            </div>

                            <div className='p-5'>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{restaurant.name}</h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{restaurant.cuisine} • {restaurant.address}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Excellent</span>
                                    <button className="text-orange-500 text-sm font-medium group-hover:underline">View Menu</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;

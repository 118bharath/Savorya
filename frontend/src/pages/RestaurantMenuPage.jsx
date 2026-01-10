import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurantService from '../services/restaurantService';
import FoodItem from '../components/FoodItem/FoodItem';
import { FiArrowLeft } from 'react-icons/fi';

// Helper to generate placeholder menu items
const generateFakeMenu = (restaurantName, cuisine) => {
  const foodNames = {
    "Pizza": ["Margherita", "Pepperoni Blast", "BBQ Chicken", "Farm Fresh Veggie", "Cheese Burst", "Mexican Wave", "Paneer Tikka", "Mushroom Delight", "Hawaiian", "Spicy Supreme"],
    "Burgers": ["Classic Cheese", "Double Patty", "Crispy Chicken", "Veggie Crunch", "BBQ Bacon", "Spicy Jalapeno", "Mushroom Swiss", "Fish Fillet", "Paneer Royale", "The Ultimate"],
    "Pasta": ["Alfredo", "Arrabbiata", "Carbonara", "Pesto Basil", "Mac & Cheese", "Lasagna", "Spaghetti Bolognese", "Penne Rosa", "Creamy Mushroom", "Primavera"],
    "Chinese": ["Fried Rice", "Manchurian", "Chilli Paneer", "Spring Rolls", "Hakka Noodles", "Szechuan Chicken", "Dim Sum", "Hot & Sour Soup", "Kung Pao", "Sweet Corn Soup"],
    "Biryani": ["Hyderabadi Dum", "Lucknowi", "Chicken 65 Biryani", "Mutton Biryani", "Veg Biryani", "Egg Biryani", "Paneer Biryani", "Keema Biryani", "Fish Biryani", "Prawn Biryani"],
    "default": ["Special Dish 1", "House Favorite", "Chef's Choice", "Daily Special", "Signature Platter", "Combo Meal", "Value Box", "Premium Selection", "Deluxe Thali", "Festive Special"]
  };

  const names = foodNames[cuisine] || foodNames["default"];
  const images = [
    "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=400",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=400",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=400",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400"
  ];

  return names.map((name, index) => ({
    _id: `fake-${restaurantName}-${index}`,
    name: name,
    description: `Delicious ${name} prepared with fresh ingredients and authentic spices.`,
    price: Math.floor(Math.random() * 200) + 100, // Random price between 100-300
    image: images[index % images.length],
    restaurantId: restaurantName
  }));
};

const RestaurantMenuPage = () => {
  const { id: restaurantId } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const data = await restaurantService.getRestaurantById(restaurantId);
        setRestaurant(data.restaurant);

        // Use real menu or generate fake one
        if (data.menu && data.menu.length > 0) {
          setMenu(data.menu.slice(0, 10)); // Limit to 10
        } else {
          // Generate 10 fake items for testing
          setMenu(generateFakeMenu(data.restaurant.name, data.restaurant.cuisine));
        }
      } catch (err) {
        setError('Could not fetch restaurant details.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchRestaurantDetails();
  }, [restaurantId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }
  if (error) return <p className="text-center my-10 text-red-500">{error}</p>;
  if (!restaurant) return <p className="text-center my-10">Restaurant not found.</p>;

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      {/* Back Button & Restaurant Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-500 mb-4 transition-colors"
        >
          <FiArrowLeft /> Back
        </button>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{restaurant.name}</h1>
            <p className="text-orange-500 font-medium mt-1">{restaurant.cuisine}</p>
            <p className="text-gray-400 text-sm mt-1">{restaurant.address}</p>
          </div>
          <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
            ★ {restaurant.rating || 4.2}
          </div>
        </div>
      </div>

      {/* Menu Listing */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Menu ({menu.length} items)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menu.length > 0 ? (
            menu.map((item) => (
              <FoodItem key={item._id} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No menu items available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
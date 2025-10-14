import axios from '../api/axios.js';

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.token : null;
};

const getAuthHeaders = () => {
  const token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};


const getAllRestaurants = async (keyword = '') => {
  const response = await axios.get(`/restaurants?search=${keyword}`);
  return response.data;
};

const getRestaurantById = async (id) => {
  const response = await axios.get(`/restaurants/${id}`);
  return response.data;
};


const createRestaurant = async (restaurantData) => {
  const response = await axios.post('/restaurants/create', restaurantData, getAuthHeaders());
  return response.data;
};

const restaurantService = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
};

export default restaurantService;
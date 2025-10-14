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

const createOrder = async (orderData) => {
  const response = await axios.post('/orders', orderData, getAuthHeaders());
  return response.data;
};

const getMyOrders = async () => {
  const response = await axios.get('/orders/myorders', getAuthHeaders());
  return response.data;
};

const orderService = {
  createOrder,
  getMyOrders,
};

export default orderService;
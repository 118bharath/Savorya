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

const addMenuItem = async (restaurantId, menuItemData) => {
    const response = await axios.post(
        `/restaurants/${restaurantId}/menu`,
        menuItemData,
        getAuthHeaders()
    );
    return response.data;
};

const menuService = {
    addMenuItem,
};

export default menuService;
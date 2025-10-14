const express=require('express');
const {
    createRestaurant,
    getRestaurants,
    updateRestaurant,
    deleteRestaurant,
    getAllRestaurants,
    getRestaurantById,
}=require('../controllers/restaurantController.js')
const {protect, admin}=require('../middleware/authMiddleware.js');
const menuItemRoutes=require('./menuItemRoutes');

const router=express.Router();

router.route('/').get(getAllRestaurants);

router.use('/:restaurantId/menu',menuItemRoutes);
router.route('/create').post(protect,admin,createRestaurant);
router.route('/myrestaurants').get(protect, admin, getRestaurants);


router.route('/:id').get(getRestaurantById);
router.route('/:id/admin').put(protect,admin,updateRestaurant).delete(protect,admin,deleteRestaurant);

module.exports=router;
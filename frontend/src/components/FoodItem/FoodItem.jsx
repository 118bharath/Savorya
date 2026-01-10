import React from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { assets } from '../../assets/frontend_assets/assets';

const FoodItem = ({ item }) => {
    const { _id, name, price, description, image } = item;
    const { cartItems, addToCart, updateQuantity } = useCart();
    const { requireAuth } = useAuth();
    const itemInCart = cartItems.find(cartItem => cartItem._id === _id);
    const quantityInCart = itemInCart ? itemInCart.quantity : 0;

    // Wrap addToCart with auth check
    const handleAddToCart = () => {
        requireAuth(() => addToCart(item));
    };

    return (
        <div className='w-full h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'>
            {/* Image Container - Fixed Height */}
            <div className="relative h-48 overflow-hidden">
                <img
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                    src={image || 'https://via.placeholder.com/300'}
                    alt={name}
                />
                {/* Cart Controls */}
                <div className="absolute bottom-3 right-3">
                    {quantityInCart === 0
                        ? <button
                            onClick={handleAddToCart}
                            className='w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all'
                        >
                            <span className="text-2xl font-light leading-none pb-0.5">+</span>
                        </button>
                        : <div className='flex items-center gap-2 p-1.5 rounded-full bg-white shadow-lg'>
                            <button
                                onClick={() => updateQuantity(_id, quantityInCart - 1)}
                                className="w-7 h-7 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                            >
                                <span className="text-lg font-medium leading-none">−</span>
                            </button>
                            <span className="w-5 text-center font-semibold text-gray-800">{quantityInCart}</span>
                            <button
                                onClick={handleAddToCart}
                                className="w-7 h-7 rounded-full bg-green-50 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
                            >
                                <span className="text-lg font-medium leading-none">+</span>
                            </button>
                        </div>
                    }
                </div>
            </div>

            {/* Content */}
            <div className='p-4 flex flex-col flex-grow'>
                <div className='flex justify-between items-start gap-2 mb-2'>
                    <p className="text-base font-semibold text-gray-800 line-clamp-1">{name}</p>
                    <img src={assets.rating_starts} alt="Rating" className="w-16 flex-shrink-0" />
                </div>
                <p className="text-gray-400 text-xs line-clamp-2 flex-grow">{description}</p>
                <p className="text-orange-500 text-xl font-bold mt-3">₹{price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default FoodItem;
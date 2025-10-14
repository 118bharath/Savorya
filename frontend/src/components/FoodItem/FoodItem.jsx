import React from 'react';
import { useCart } from '../../context/CartContext'; 
import { assets } from '../../assets/frontend_assets/assets';

const FoodItem = ({ item }) => {
    const { _id, name, price, description, image } = item;
    const { cartItems, addToCart, updateQuantity } = useCart();
    const itemInCart = cartItems.find(cartItem => cartItem._id === _id);
    const quantityInCart = itemInCart ? itemInCart.quantity : 0;

    return (
        <div className='w-full mx-auto rounded-[15px] shadow-lg transition-all duration-300 animate-fadeIn'>
            <div className="relative">
                <img className='w-full rounded-t-[15px]' src={image || 'https://via.placeholder.com/300'} alt={name} />
                {
                    quantityInCart === 0 
                        ? <img 
                            className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' 
                            onClick={() => addToCart(item)} 
                            src={assets.add_icon_white} 
                            alt="Add to cart" 
                          />
                        : <div className='absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-full bg-white'>
                            <img 
                                onClick={() => updateQuantity(_id, quantityInCart - 1)} 
                                src={assets.remove_icon_red} 
                                alt="Remove one"
                                className="w-7 cursor-pointer" 
                            />
                            <p>{quantityInCart}</p>
                            <img 
                                onClick={() => addToCart(item)} 
                                src={assets.add_icon_green} 
                                alt="Add one"
                                className="w-7 cursor-pointer"
                            />
                        </div>
                }
            </div>
            <div className='p-5'>
                <div className='flex justify-between items-center mb-2.5'>
                    <p className="text-xl font-medium">{name}</p>
                    <img src={assets.rating_starts} alt="Rating" className="w-[70px]" />
                </div>
                <p className="text-gray-500 text-xs">{description}</p>
                <p className="text-tomato text-2xl font-medium my-2.5">₹{price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default FoodItem;
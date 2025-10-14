import React from 'react';
import { useCart } from '../../context/CartContext'; 
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal > 0 ? 50.00 : 0; 
  const total = subtotal + deliveryFee;
  
  if (cartItems.length === 0) {
    return <div className="text-center my-24 text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className='mt-24 px-4 md:px-8'>
      <div className="cart-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-gray-200 border-none" />
        {cartItems.map((item) => (
          <div key={item._id}>
            <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-2.5 text-black'>
              <img src={item.imageUrl || 'https://via.placeholder.com/50'} alt="" className="w-[50px]" />
              <p>{item.name}</p>
              <p>₹{item.price.toFixed(2)}</p>
              
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                className="w-16 text-center border rounded" 
              />
              <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>X</p>
            </div>
            <hr className="h-[1px] bg-gray-200 border-none" />
          </div>
        ))}
      </div>
      <div className='mt-20 flex flex-col-reverse md:flex-row justify-between gap-[max(12vw,20px)]'>
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div>
            <div className='flex justify-between text-gray-600'>
              <p>Subtotal</p>
              <p>₹{subtotal.toFixed(2)}</p>
            </div>
            <hr className="my-2.5" />
            <div className='flex justify-between text-gray-600'>
              <p>Delivery Fee</p>
              <p>₹{deliveryFee.toFixed(2)}</p>
            </div>
            <hr className="my-2.5" />
            <div className='flex justify-between text-black font-bold'>
              <b>Total</b>
              <b>₹{total.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={() => navigate('/checkout')} className="border-none text-white bg-orange-500 w-[max(15vw,200px)] py-3 rounded cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-gray-600">If you have a promo code, enter it here</p>
            <div className='mt-2.5 flex justify-between items-center bg-gray-200 rounded'>
              <input type="text" placeholder='promo code' className="bg-transparent border-none outline-none pl-2.5" />
              <button className="w-[max(10vw,150px)] py-3 px-1.5 bg-black border-none text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
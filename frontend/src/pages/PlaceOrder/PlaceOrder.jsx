import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import orderService from '../../services/orderService';

const PlaceOrder = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
  });

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal > 0 ? 50.00 : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderData = {
      orderItems: cartItems.map(({ _id, name, quantity, price }) => ({
        _id, name, quantity, price
      })),
      shippingAddress: address,
      totalPrice: total,
    };

    try {
      await orderService.createOrder(orderData);
      alert('Order placed successfully!');
      clearCart();
      navigate('/my-orders');
    } catch (error) {
      alert('Failed to place order.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handlePlaceOrder} className='flex flex-col md:flex-row items-start justify-between gap-12 mt-24 px-4 md:px-8'>
      <div className="w-full max-w-[max(30%,500px)]">
        <p className='text-3xl font-semibold mb-12'>Delivery Information</p>
        <div className='flex gap-2.5'>
          <input required name="firstName" onChange={handleChange} type="text" placeholder='First name' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
          <input required name="lastName" onChange={handleChange} type="text" placeholder='Last name' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
        </div>
        <input required name="email" onChange={handleChange} type="email" placeholder='Email Address' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
        <input required name="street" onChange={handleChange} value={address.street} type="text" placeholder='Street' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
        <div className='flex gap-2.5'>
          <input required name="city" onChange={handleChange} value={address.city} type="text" placeholder='City' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
          <input required name="state" onChange={handleChange} type="text" placeholder='State' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
        </div>
        <div className='flex gap-2.5'>
          <input required name="postalCode" onChange={handleChange} value={address.postalCode} type="text" placeholder='Pin code' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
          <input required name="country" onChange={handleChange} type="text" placeholder='Country' className="mb-4 w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
        </div>
        <input required name="phone" onChange={handleChange} type="text" placeholder='Phone' className="w-full p-2.5 border border-gray-300 rounded outline-orange-500" />
      </div>

      <div className="w-full max-w-[max(40%,500px)]">
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div>
            <div className='flex justify-between text-gray-600'><p>Subtotal</p><p>₹{subtotal.toFixed(2)}</p></div>
            <hr className="my-2.5" />
            <div className='flex justify-between text-gray-600'><p>Delivery Fee</p><p>₹{deliveryFee.toFixed(2)}</p></div>
            <hr className="my-2.5" />
            <div className='flex justify-between text-black font-bold'><b>Total</b><b>₹{total.toFixed(2)}</b></div>
          </div>
          <button type="submit" className="mt-7 border-none text-white bg-orange-500 w-[max(15vw,200px)] py-3 rounded cursor-pointer">
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
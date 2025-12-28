import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { assets } from '../../assets/frontend_assets/assets';

const Navbar = ({ setShowLogin }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowDropdown(false);
  };

  const handleOrders = () => {
    navigate('/my-orders');
    setShowDropdown(false);
  };

  // close dropdown when clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setShowDropdown(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className='bg-white shadow-md sticky top-4 z-50 py-3 px-8 md:px-12 flex justify-between items-center gap-4 w-full mx-auto rounded-full border border-gray-100 mt-5 transition-all duration-300'>

      {/* Left: Brand & Location */}
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
        <h1 className='text-3xl font-bold text-[#333333] tracking-tight'>Savorya.</h1>
        <div className='hidden md:flex flex-col border-l-2 border-gray-300 pl-4 h-8 justify-center'>
          <span className='text-xs text-gray-400 font-medium uppercase tracking-wider'>Location</span>
          <span className='text-sm text-gray-600 font-medium leading-none'>Hyderabad</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className='hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2.5 w-full max-w-[500px] transition-all focus-within:ring-2 focus-within:ring-orange-100 focus-within:bg-white border border-transparent focus-within:border-orange-200'>
        <img src={assets.search_icon} alt="search" className="w-5 opacity-40 mr-3" />
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          className="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400 text-sm font-medium"
        />
      </div>

      {/* Right: Actions */}
      <div className='flex items-center gap-6'>

        {/* Search Icon (Mobile Only) */}
        <img src={assets.search_icon} alt="search" className="w-5 md:hidden cursor-pointer opacity-70" />

        {/* Orders (Desktop) */}
        {user && (
          <div onClick={handleOrders} className='hidden md:flex flex-col items-center cursor-pointer group text-gray-500 hover:text-[#333333] transition-colors'>
            <img src={assets.bag_icon} alt="orders" className="w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className='text-[10px] font-medium mt-0.5'>Orders</span>
          </div>
        )}

        {/* Cart */}
        <div className='relative cursor-pointer group' onClick={() => navigate('/cart')}>
          <img src={assets.basket_icon} alt="cart" className="w-6 opacity-80 group-hover:opacity-100 transition-opacity" />
          {totalCartItems > 0 && (
            <div className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
              {totalCartItems}
            </div>
          )}
        </div>

        {/* Profile / Auth */}
        {!user ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-[#333333] hover:bg-black text-white text-sm font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Sign in
          </button>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(prev => !prev)}
              aria-haspopup="true"
              aria-expanded={showDropdown}
              className="flex items-center focus:outline-none opacity-90 hover:opacity-100 transition-opacity"
            >
              <img src={assets.profile_icon} alt="profile" className="w-8 h-8 rounded-full border border-gray-200 p-0.5" />
            </button>

            {showDropdown && (
              <ul className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100 animate-fadeIn">
                <li className="px-2 md:hidden">
                  <button
                    onClick={handleOrders}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                  >
                    <img src={assets.bag_icon} alt="orders" className="w-4" />
                    <span>Orders</span>
                  </button>
                </li>
                <li className="px-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors"
                  >
                    <img src={assets.logout_icon} alt="logout" className="w-4" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

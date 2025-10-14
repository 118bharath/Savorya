import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { assets } from '../../assets/frontend_assets/assets';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='py-5 px-4 md:px-8 flex justify-between items-center'>
      <Link to='/'>
        <span className='text-3xl font-bold text-tomato cursor-pointer'>
          Blissbowl
        </span>
      </Link>

      <ul className='hidden md:flex list-none gap-5 text-[#49557e] text-lg'>
        <Link
          to='/'
          onClick={() => setMenu("home")}
          className={`cursor-pointer ${menu === "home" ? "pb-0.5 border-b-2 border-[#49557e]" : ""}`}
        >
          home
        </Link>
        <a
          href='#explore-menu'
          onClick={() => setMenu("menu")}
          className={`cursor-pointer ${menu === "menu" ? "pb-0.5 border-b-2 border-[#49557e]" : ""}`}
        >
          menu
        </a>
        <a
          href='#footer'
          onClick={() => setMenu("contact-us")}
          className={`cursor-pointer ${menu === "contact-us" ? "pb-0.5 border-b-2 border-[#49557e]" : ""}`}
        >
          contact us
        </a>
      </ul>

      <div className='flex items-center gap-5 sm:gap-7 md:gap-10'>
        <img src={assets.search_icon} alt="" className="w-5 md:w-6 cursor-pointer" />
        <div className='relative'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" className="w-5 md:w-6" /></Link>
          <div className={totalCartItems === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-tomato rounded-full -top-2 -right-2"}></div>
        </div>

        {!user ? (
          <button onClick={() => setShowLogin(true)} className="bg-transparent text-sm sm:text-base text-[#49557e] border border-tomato px-5 py-2 sm:px-7 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#fff4f2]">
            Sign in
          </button>
        ) : (
          <div className="group relative">
            <img src={assets.profile_icon} alt="profile" className="w-6 cursor-pointer" />
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 hidden group-hover:block">
              <li onClick={() => navigate('/my-orders')} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                <img src={assets.bag_icon} alt="orders" className="w-5" />
                <p>Orders</p>
              </li>
              <hr className="my-1" />
              <li onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                <img src={assets.logout_icon} alt="logout" className="w-5" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
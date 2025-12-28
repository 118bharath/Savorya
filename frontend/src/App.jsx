import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import RestaurantMenuPage from './pages/RestaurantMenuPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import ManageMenuPage from './pages/ManageMenuPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='w-[90%] mx-auto'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/restaurant/:id' element={<RestaurantMenuPage />} />

          {/* User-Only Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/my-orders' element={<MyOrdersPage />} />
          </Route>

          {/* Admin-Only Protected Routes */}
          <Route path="/admin" element={<AdminRoute />}>
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="orders" element={<AdminOrdersPage />} />
            <Route path="restaurant/:restaurantId/menu" element={<ManageMenuPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
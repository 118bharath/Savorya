import React from 'react';
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
import CategoryPage from './pages/CategoryPage/CategoryPage';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { showLoginPrompt, setShowLoginPrompt } = useAuth();

  return (
    <>
      {showLoginPrompt && <LoginPopup setShowLogin={setShowLoginPrompt} />}
      <div className='w-[90%] mx-auto'>
        <Navbar setShowLogin={setShowLoginPrompt} />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/category/:categoryName' element={<CategoryPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/restaurant/:id' element={<RestaurantMenuPage />} />

          {/* User-Only Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='/order' element={<PlaceOrder />} />    // unwanted route
            <Route path='/my-orders' element={<MyOrdersPage />} />
          </Route>

        //Check this route
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
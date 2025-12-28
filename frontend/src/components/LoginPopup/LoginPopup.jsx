import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';
import { assets } from '../../assets/frontend_assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const { login } = useAuth();
  const [currentState, setCurrentState] = useState("Login");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Login") {
        const userData = await authService.login({ email: formData.email, password: formData.password });
        login(userData);
      } else {
        const userData = await authService.register(formData);
        login(userData);
      }
      setShowLogin(false);
    } catch (error) {
      const message = error.response?.data?.msg || error.response?.data?.message || "An error occurred.";
      alert(message);
      console.error("Signup Error:", error.response?.data);
      console.error(error);
    }
  };

  return (
    <div className='fixed inset-0 z-50 bg-black/60 grid'>
      <form onSubmit={onLogin} className='place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-6 p-6 rounded-lg text-sm animate-fadeIn'>
        <div className="flex justify-between items-center text-black">
          <h2 className="text-2xl font-bold">{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" className="w-4 cursor-pointer" />
        </div>
        <div className='flex flex-col gap-5'>
          {currentState === "Sign Up" && (
            <input
              name='name'
              onChange={handleChange}
              value={formData.name}
              type="text"
              placeholder='Your Name'
              required
              className="outline-none border border-gray-300 p-2.5 rounded"
            />
          )}
          <input
            name='email'
            onChange={handleChange}
            value={formData.email}
            type="email"
            placeholder="Your Email"
            required
            className="outline-none border border-gray-300 p-2.5 rounded"
          />
          <input
            name='password'
            onChange={handleChange}
            value={formData.password}
            type="password"
            placeholder='Password'
            required
            className="outline-none border border-gray-300 p-2.5 rounded"
          />
        </div>
        <button type="submit" className="border-none p-2.5 rounded text-white bg-tomato text-base cursor-pointer">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className='flex items-start gap-2 -mt-4'>
          <input type="checkbox" required className="mt-1" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login"
          ? <p>Create a new Account? <span onClick={() => setCurrentState("Sign Up")} className="text-tomato font-medium cursor-pointer">Click Here</span></p>
          : <p>Already have an Account? <span onClick={() => setCurrentState("Login")} className="text-tomato font-medium cursor-pointer">Login here</span></p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';
import { FiX, FiMail, FiLock, FiUser, FiShield } from 'react-icons/fi';

const LoginPopup = ({ setShowLogin }) => {
  const { login } = useAuth();
  const [currentState, setCurrentState] = useState("Login");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    setError(''); // Clear error on change
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (currentState === "Login") {
        const userData = await authService.login({
          email: formData.email,
          password: formData.password
        });
        login(userData);
      } else {
        const userData = await authService.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.isAdmin ? 'admin' : 'user'
        });
        login(userData);
      }
      setShowLogin(false);
    } catch (error) {
      const message = error.response?.data?.msg || error.response?.data?.message || "An error occurred. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const switchState = () => {
    setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
    setError('');
    setFormData({ ...formData, isAdmin: false });
  };

  return (
    <div className='fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4'>
      <div className='relative w-full max-w-md animate-fadeIn'>
        {/* Card */}
        <form
          onSubmit={onLogin}
          className='bg-white rounded-3xl shadow-2xl overflow-hidden'
        >
          {/* Header */}
          <div className='bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white relative'>
            <button
              type="button"
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <FiX className="text-lg" />
            </button>
            <h2 className="text-2xl font-bold">
              {currentState === "Login" ? "Welcome Back!" : "Create Account"}
            </h2>
            <p className="text-orange-100 mt-1 text-xs">
              {currentState === "Login"
                ? "Sign in to continue ordering delicious food"
                : "Join Savorya to start your food journey"}
            </p>
          </div>

          {/* Form Body */}
          <div className='p-5 space-y-3'>
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Name Field (Signup Only) */}
            {currentState === "Sign Up" && (
              <div className='relative'>
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name='name'
                  onChange={handleChange}
                  value={formData.name}
                  type="text"
                  placeholder='Full Name'
                  required
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-400 focus:bg-white transition-all text-gray-700 text-sm"
                />
              </div>
            )}

            {/* Email Field */}
            <div className='relative'>
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name='email'
                onChange={handleChange}
                value={formData.email}
                type="email"
                placeholder="Email Address"
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-400 focus:bg-white transition-all text-gray-700 text-sm"
              />
            </div>

            {/* Password Field */}
            <div className='relative'>
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name='password'
                onChange={handleChange}
                value={formData.password}
                type="password"
                placeholder='Password'
                required
                minLength={6}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-400 focus:bg-white transition-all text-gray-700 text-sm"
              />
            </div>

            {/* Admin Toggle (Signup Only) */}
            {currentState === "Sign Up" && (
              <label className='flex items-center justify-between p-3 bg-purple-50 rounded-xl cursor-pointer border border-purple-100 hover:border-purple-300 transition-colors'>
                <div className="flex items-center gap-2">
                  <FiShield className={`text-sm ${formData.isAdmin ? 'text-purple-500' : 'text-gray-400'}`} />
                  <span className={`text-sm ${formData.isAdmin ? 'text-purple-700 font-medium' : 'text-gray-600'}`}>
                    Register as Restaurant Owner
                  </span>
                </div>
                <div
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors ${formData.isAdmin ? 'bg-purple-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white shadow transform transition-transform ${formData.isAdmin ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
                <input
                  type="checkbox"
                  name="isAdmin"
                  checked={formData.isAdmin}
                  onChange={handleChange}
                  className="sr-only"
                />
              </label>
            )}

            {/* Terms Checkbox - Only for Signup */}
            {currentState === "Sign Up" && (
              <label className='flex items-start gap-3 cursor-pointer'>
                <input type="checkbox" required className="mt-1 w-4 h-4 accent-orange-500" />
                <span className="text-gray-500 text-sm">
                  By continuing, I agree to the <span className="text-orange-500 hover:underline">Terms of Use</span> & <span className="text-orange-500 hover:underline">Privacy Policy</span>
                </span>
              </label>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                currentState === "Sign Up" ? "Create Account" : "Sign In"
              )}
            </button>

            {/* Switch State */}
            <p className='text-center text-gray-500 text-sm'>
              {currentState === "Login" ? (
                <>
                  Don't have an account?{' '}
                  <button type="button" onClick={switchState} className="text-orange-500 font-semibold hover:underline">
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button type="button" onClick={switchState} className="text-orange-500 font-semibold hover:underline">
                    Sign In
                  </button>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
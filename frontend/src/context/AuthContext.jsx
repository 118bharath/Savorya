import React, { createContext, useState, useContext } from 'react';
import authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Global state to trigger login popup from any component
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setShowLoginPrompt(false); // Close popup after login
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // Helper to require auth before an action
  const requireAuth = (callback) => {
    if (user) {
      callback();
    } else {
      setShowLoginPrompt(true);
    }
  };

  const value = { user, login, logout, showLoginPrompt, setShowLoginPrompt, requireAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
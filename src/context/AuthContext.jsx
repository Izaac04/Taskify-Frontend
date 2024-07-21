import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios.jsx';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('authToken') || null);

  const login = (token) => {
    setAuth(token);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [auth]);

  return (
      <AuthContext.Provider value={{ auth, login, logout }}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthContext;

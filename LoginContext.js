import React, { createContext, useState } from 'react';

// Create a context for login
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to log in the user
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to log out the user
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
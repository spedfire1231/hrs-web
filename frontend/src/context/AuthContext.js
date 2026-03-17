import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null);
  const [user, setUser] = useState(() => localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

  useEffect(() => {
    if (authTokens) {
      // Fetch user info with JWT token
      const fetchUser = async () => {
        const response = await fetch('/api/user/', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${authTokens.access}` }
        });
        const data = await response.json();
        setUser(data);
      };
      fetchUser();
    } else {
      setUser(null);
    }
  }, [authTokens]);

  const login = (tokens) => {
    setAuthTokens(tokens);
    setUser(tokens.user);
    localStorage.setItem('tokens', JSON.stringify(tokens));
    localStorage.setItem('user', JSON.stringify(tokens.user));
  };

  const logout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('tokens');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, authTokens, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
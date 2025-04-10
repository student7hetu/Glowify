import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('glowify_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    const registeredUsers = JSON.parse(localStorage.getItem('glowify_users')) || [];
    const foundUser = registeredUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('glowify_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = (newUser) => {
    const registeredUsers = JSON.parse(localStorage.getItem('glowify_users')) || [];
    if (registeredUsers.find(u => u.email === newUser.email)) return false;
    registeredUsers.push(newUser);
    localStorage.setItem('glowify_users', JSON.stringify(registeredUsers));
    return login(newUser.email, newUser.password);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('glowify_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

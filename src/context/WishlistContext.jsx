import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  // Load from localStorage (ONLY if user is logged in)
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`glowify_wishlist_${user.email}`);
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    }
  }, [user]);

  // Save wishlist to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(`glowify_wishlist_${user.email}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item._id === product._id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

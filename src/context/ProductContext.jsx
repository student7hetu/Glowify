import { createContext, useContext, useState, useEffect } from 'react';
import { products as productData } from '../data/products';
import { categories as categoryData } from '../data/categories';
import { toast } from 'react-toastify';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  // Load products, categories, cart, and order history
  useEffect(() => {
    setProducts(productData);
    setCategories(categoryData);

    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));

    const storedOrders = localStorage.getItem('orderHistory');
    if (storedOrders) setOrderHistory(JSON.parse(storedOrders));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save order history to localStorage
  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }, [orderHistory]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      toast.info(`${product.name} quantity increased`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success(`${product.name} added to cart`);
    }
  };
  
  const removeFromCart = (id) => {
    const item = cart.find(i => i._id === id);
    setCart(cart.filter((item) => item._id !== id));
    toast.error(`${item?.name} removed from cart`);
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const placeOrder = (shippingData) => {
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 10,
      date: new Date().toLocaleString(),
      shipping: shippingData,
      status: 'Pending',
    };
    localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));
    clearCart();
  };
  

  return (
    <ProductContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        products,
        categories,
        placeOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

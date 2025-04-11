import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import ContactUs from './pages/ContactUs';
import CategoryProducts from './pages/CategoryProducts';
import Cart from './pages/Cart';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';
import FAQs from './pages/FAQs';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ new import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoodShop from './pages/MoodShop';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/mood-shop" element={<MoodShop />} />

        {/* 🔒 Protected Routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-history"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />

      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

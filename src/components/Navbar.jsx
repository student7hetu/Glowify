// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';
import logo from '../assets/logo.png';
import Wishlist from '../pages/Wishlist';

export default function Navbar() {
  const { cart } = useProductContext();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-100 shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO LEFT */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Glowify Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/order-history">Orders</Link>

          {/* CART */}
          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#48A6A7] text-white text-xs font-bold rounded-full px-2">
                {totalQty}
              </span>
            )}
          </Link>
          
<Link to="/auth" className="text-[#006A71] hover:text-[#48A6A7]">
  <FaUser size={20} />
</Link>


        </div>
      </div>
    </nav>
  );
}

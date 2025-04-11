// src/components/Navbar.jsx
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useProductContext } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { cart } = useProductContext();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#006A71] font-bold border-b-2 border-[#006A71] pb-1'
      : 'text-gray-700 hover:text-[#006A71] transition';

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="bg-gray-100 shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Glowify Logo"
            className="h-10 w-auto object-contain"
          />
        </NavLink>

        {/* LINKS */}
        <div className="flex items-center gap-6 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/categories" className={navLinkClass}>Categories</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/wishlist" className={navLinkClass}>Wishlist</NavLink>
          <NavLink to="/order-history" className={navLinkClass}>Orders</NavLink>
          <NavLink to="/faqs" className={navLinkClass}>FAQs</NavLink>

          {/* CART ICON */}
          <NavLink to="/cart" className="relative text-gray-700 hover:text-[#006A71] transition">
            <FaShoppingCart size={22} />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#48A6A7] text-white text-xs font-bold rounded-full px-2">
                {totalQty}
              </span>
            )}
          </NavLink>

          {/* LOGIN / LOGOUT ICON */}
          {user ? (
            <button onClick={handleLogout} title="Logout">
              <FaSignOutAlt size={20} className="text-red-500 hover:text-red-700 transition" />
            </button>
          ) : (
            <NavLink to="/auth" className="text-[#006A71] hover:text-[#48A6A7] transition">
              <FaUser size={20} />
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

// src/components/Navbar.jsx
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { cart } = useProductContext();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#006A71] font-bold border-b-2 border-[#006A71] pb-1'
      : 'text-gray-700 hover:text-[#006A71] transition';

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/auth');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gray-100 shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Glowify Logo" className="h-10 w-auto object-contain" />
        </NavLink>

        {/* HAMBURGER ICON (MOBILE) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* NAV LINKS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-6 font-medium">
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

          {/* AUTH ICON */}
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

      {/* NAV LINKS (MOBILE DROPDOWN) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-6 pb-6 flex flex-col gap-4 font-medium">
          <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/categories" className={navLinkClass} onClick={closeMenu}>Categories</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/wishlist" className={navLinkClass} onClick={closeMenu}>Wishlist</NavLink>
          <NavLink to="/order-history" className={navLinkClass} onClick={closeMenu}>Orders</NavLink>
          <NavLink to="/faqs" className={navLinkClass} onClick={closeMenu}>FAQs</NavLink>
          <NavLink to="/cart" className={navLinkClass} onClick={closeMenu}>Cart</NavLink>

          {user ? (
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 text-left"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/auth" className="text-[#006A71]" onClick={closeMenu}>
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}

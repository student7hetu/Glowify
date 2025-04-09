import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'; // make sure this is your new logo

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="PureCare Logo"
            className="w-30 h-30 object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

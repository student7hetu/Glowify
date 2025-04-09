// src/components/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#7F56D9]">PersonalCare</Link>
        <nav className="space-x-6 text-sm font-medium">
          <Link to="/" className="text-[#6B7280] hover:text-[#7F56D9]">Home</Link>
          <Link to="/favourite" className="text-[#6B7280] hover:text-[#7F56D9]">Favourites</Link>
          <Link to="/contact" className="text-[#6B7280] hover:text-[#7F56D9]">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

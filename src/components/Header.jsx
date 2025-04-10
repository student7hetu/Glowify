import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#F2EFE7] p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-[#006A71]">PureCare</h1>
        <nav className="mt-4 md:mt-0 space-x-6 text-[#006A71] font-medium">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

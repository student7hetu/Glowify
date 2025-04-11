// src/pages/MoodShop.jsx
import { useLocation, Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import { useEffect, useState } from 'react';

export default function MoodShop() {
  const { products } = useProductContext();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const mood = query.get('mood');

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    let result = [];

    switch (mood) {
      case 'feeling-dull':
        result = products.filter((p) =>
          ['Hydrating Cream', 'Toner', 'Gentle Cleanser'].includes(p.name)
        );
        break;
      case 'weekend-chill':
        result = products.filter((p) =>
          ['Herbal Tea', 'Aromatherapy Oil', 'Shower Gel', 'Body Scrub'].includes(p.name)
        );
        break;
      case 'feeling-tired':
        result = products.filter((p) =>
          ['Energy Drink', 'Protein Bar', 'Vitamin Gummies'].includes(p.name)
        );
        break;
      case 'glow-goals':
        result = products.filter((p) =>
          ['Night Serum', 'Face Mask', 'Eye Cream'].includes(p.name)
        );
        break;
      default:
        result = [];
    }

    setFiltered(result);
    window.scrollTo(0, 0);
  }, [mood, products]);

  const moodTitle = {
    'feeling-dull': '🌞 Feeling Dull? Let’s Brighten Up!',
    'weekend-chill': '🛀 Weekend Chill Vibes',
    'feeling-tired': '💤 Feeling Tired? Boost Your Energy!',
    'glow-goals': '✨ Your Glow Goals Kit',
  };

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-6 lg:px-20">
      <h1 className="text-3xl font-prata text-[#006A71] mb-8 text-center">
        {moodTitle[mood] || 'Shop by Mood'}
      </h1>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <Link
              key={item._id}
              to={`/product/${item._id}`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-[#48A6A7] font-bold">₹{item.price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found for this mood.</p>
      )}
    </div>
  );
}

// src/pages/Home.jsx
export default function Home() {
    return (
      <div className="p-6 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to PureCare</h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover high-quality personal care products for your daily routine.
        </p>
  
        <a
          href="/categories"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
        >
          Browse Categories
        </a>
      </div>
    );
  }
  
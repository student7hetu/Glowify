import { useProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Categories() {
  const { categories, products } = useProductContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = Array.isArray(products)
  ? products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];

  return (
    <div className="bg-[#F2EFE7] min-h-screen py-10 px-4 sm:px-6 lg:px-20">

      {/* TITLE */}
      <h1 className="text-4xl font-prata text-[#006A71] mb-8 text-center">
        Shop by Category
      </h1>

      {/* CATEGORY CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {categories.map((cat) => (
          <Link
            to={`/category/${cat._id}`}
            key={cat._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition text-center p-4"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <h3 className="font-semibold text-[#006A71]">{cat.name}</h3>
          </Link>
        ))}
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#48A6A7]"
        />
      </div>

      {/* FILTERED PRODUCTS */}
      <h2 className="text-3xl font-prata text-[#006A71] mb-4 text-center">All Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-[#48A6A7] font-bold">₹{item.price}</p>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No matching products found.</p>
        )}
      </div>
    </div>
  );
}

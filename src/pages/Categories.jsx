import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://personalcarebackend.onrender.com/categories')
      .then(res => setCategories(res.data.categories))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map(cat => (
          <Link
            to={`/category/${cat._id}`}
            key={cat._id}
            className="border rounded-lg p-4 hover:shadow-lg"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

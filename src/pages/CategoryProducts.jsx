// src/pages/CategoryProducts.jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://personalcarebackend.onrender.com/products');
        const filtered = res.data.data.filter((p) => p.category_id === id);
        setProducts(filtered);
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };

    fetchProducts();
  }, [id]);

  if (products.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No products found in this category.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Link to={`/product/${product._id}`} key={product._id}>
          <div className="p-4 shadow-md hover:shadow-lg transition rounded-lg bg-white">
            <img
              src={product.images[0]}
              alt={product.product_name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{product.product_name}</h3>
            <p className="text-green-700 font-bold mt-1">₹{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryProducts;

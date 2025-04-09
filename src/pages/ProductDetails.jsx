// src/pages/ProductDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://personalcarebackend.onrender.com/products');
        const foundProduct = res.data.data.find((p) => p._id === id);
        setProduct(foundProduct);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    fetchProducts();
  }, [id]);

  if (!product) {
    return <div className="text-center py-10 text-gray-500">Loading product details...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.product_name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.images[0]} alt={product.product_name} className="w-full rounded-lg shadow" />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, idx) => (
              <img key={idx} src={img} alt={`img-${idx}`} className="w-20 h-20 object-cover rounded border" />
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-700 mb-2"><strong>Brand:</strong> {product.brand_name}</p>
          <p className="text-gray-700 mb-2"><strong>Price:</strong> ₹{product.price}</p>
          <p className="text-gray-700 mb-2"><strong>Rating:</strong> ⭐ {product.rating}</p>
          <p className="text-gray-800 mt-4"><strong>Description:</strong><br />{product.description}</p>
          <p className="text-gray-800 mt-4"><strong>Ingredients:</strong></p>
          <ul className="list-disc ml-6">
            {product.materials.map((mat, idx) => (
              <li key={idx}>{mat}</li>
            ))}
          </ul>
          <p className="text-gray-800 mt-4"><strong>Usage:</strong><br />{product.usage_instructions}</p>
          <div className="mt-4">
            <strong>Tags:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {product.tags.map((tag, idx) => (
                <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

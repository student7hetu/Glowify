import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductInquiryForm from '../components/ProductInquiryForm';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useProductContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p._id === id);
    setProduct(found);
  }, [id, products]);

  if (!product) {
    return <div className="text-center py-10">Loading product details...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-5 md:px-20 flex flex-col md:flex-row gap-10">
      {/* Left: Product Info */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] object-contain border mb-4 rounded"
        />
        <h2 className="text-2xl font-bold text-[#006A71] mb-2">{product.name}</h2>
        <p className="text-lg font-semibold text-[#48A6A7] mb-1">₹{product.price}</p>
        <p className="text-sm text-gray-700 mb-4">{product.description}</p>

        <p className="text-sm"><strong>Brand:</strong> {product.brand}</p>
        <p className="text-sm mt-1"><strong>Ingredients:</strong> {product.ingredients}</p>
        <p className="text-sm mt-1"><strong>Usage:</strong> {product.usage}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 w-full bg-[#48A6A7] hover:bg-[#006A71] text-white py-3 rounded-lg font-semibold"
        >
          Add to Cart
        </button>
      </div>

      {/* Right: Inquiry Form */}
      <div className="w-full md:w-1/2">
        <ProductInquiryForm product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;

import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import { useWishlist } from '../context/WishlistContext';
import ProductInquiryForm from '../components/ProductInquiryForm';
import { FaHeart } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useProductContext();
  const { addToWishlist } = useWishlist();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p._id === id);
    setProduct(found);
  }, [id, products]);

  if (!product) {
    return <div className="text-center py-10">Loading product details...</div>;
  }

  const related = products.filter(
    (p) => p.category_id === product.category_id && p._id !== product._id
  );

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Product Info */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-sm relative">
          {/* Wishlist Icon */}
          <FaHeart
            onClick={() => addToWishlist(product)}
            className="absolute top-4 right-4 text-[#48A6A7] hover:text-[#006A71] text-xl cursor-pointer"
          />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-cover border rounded mb-4"
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

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-prata text-[#006A71] mb-6">Related Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link
                to={`/product/${item._id}`}
                key={item._id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition relative"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-[#48A6A7] font-bold">₹{item.price}</p>
                {/* Wishlist */}
                <FaHeart
                  onClick={(e) => {
                    e.preventDefault();
                    addToWishlist(item);
                  }}
                  className="absolute top-3 right-3 text-[#48A6A7] hover:text-[#006A71] cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

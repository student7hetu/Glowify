import { useParams, Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';

export default function CategoryProducts() {
  const { id } = useParams();
  const { products, categories } = useProductContext();
  const { addToWishlist } = useWishlist();

  const filteredProducts = products.filter((product) => product.category_id === id);
  const category = categories.find((cat) => cat._id === id);

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-prata text-[#006A71] mb-8 text-center">
        {category ? category.name : 'Category'} Products
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all relative"
            >
              {/* Heart Button */}
              <button
                onClick={() => addToWishlist(product)}
                className="absolute top-3 right-3 text-[#48A6A7] hover:text-[#006A71]"
              >
                <FaHeart />
              </button>

              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold text-[#006A71]">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">₹{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No products found in this category.</p>
      )}
    </div>
  );
}
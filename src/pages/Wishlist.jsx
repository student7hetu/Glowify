import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemove = (id) => {
    removeFromWishlist(id);
    toast.success('Removed from Wishlist');
  };

  return (
    <div className="bg-[#F2EFE7] min-h-screen px-6 py-10">
      <h1 className="text-4xl font-prata text-[#006A71] mb-8 text-center">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">No items in your wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow p-4 relative group">
              <Link to={`/product/${item._id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded mb-3 cursor-pointer group-hover:opacity-90"
                />
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <Link to={`/product/${item._id}`}>
                    <h3 className="font-semibold text-gray-800 hover:text-[#006A71] transition">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-[#48A6A7] font-bold">₹{item.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700 mt-1"
                  title="Remove from Wishlist"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

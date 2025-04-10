import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';


export default function Wishlist() {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="bg-[#F2EFE7] min-h-screen px-6 py-10">
            <h1 className="text-4xl font-prata text-[#006A71] mb-8 text-center">My Wishlist</h1>

            {wishlist.length === 0 ? (
                <p className="text-center text-gray-500">No items in your wishlist yet.</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {wishlist.map((item) => (
                        <div key={item._id} className="bg-white rounded-lg shadow p-4 relative">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-3" />
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-[#48A6A7] font-bold">₹{item.price}</p>
                            <div className="flex justify-between mt-2">
                                <Link
                                    to={`/product/${item._id}`}
                                    className="text-sm text-[#006A71] hover:underline"
                                >
                                    View
                                </Link>
                                <button
                                    onClick={() => removeFromWishlist(item._id)}
                                    className="text-red-500 hover:text-red-700 transition-colors duration-300 mt-2"

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

// src/pages/Cart.jsx
import { useProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useProductContext();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = cart.length > 0 ? 10 : 0;
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-prata text-[#006A71] mb-8 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4 text-lg">Oops! Your cart is currently empty.</p>
          <Link to="/categories">
            <button className="bg-[#48A6A7] hover:bg-[#006A71] text-white px-6 py-3 rounded-lg font-semibold transition">
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 🛒 Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#006A71]">{item.name}</h3>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="px-2 py-1 bg-[#9ACBD0] rounded font-bold"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item._id)}
                        className="px-2 py-1 bg-[#48A6A7] text-white rounded font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* 💸 Cart Totals */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-2xl font-prata text-[#006A71] mb-4">Cart Totals</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>₹{shippingFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-[#006A71] border-t pt-2">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <Link to="/checkout">
              <button className="mt-6 w-full bg-[#48A6A7] hover:bg-[#006A71] text-white py-3 rounded-lg font-semibold transition">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

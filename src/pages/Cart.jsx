// src/pages/Cart.jsx
import { useProductContext } from '../context/ProductContext';

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useProductContext();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-[#006A71] mb-8 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty 🫠</p>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQty(item._id)}
                  className="bg-gray-200 px-3 py-1 rounded text-lg"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item._id)}
                  className="bg-gray-200 px-3 py-1 rounded text-lg"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="ml-4 text-red-600 text-sm underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold text-[#006A71]">Total: ₹{totalPrice}</h3>
            <button
              onClick={() => {
                alert('Order placed successfully! (Just for fun 🤭)');
                clearCart();
              }}
              className="mt-4 bg-[#48A6A7] hover:bg-[#006A71] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

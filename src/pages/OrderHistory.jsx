// src/pages/OrderHistory.jsx
import { useEffect, useState } from 'react';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders.filter((o) => o.status !== 'Cancelled'));
  }, []);

  const handleCancel = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem(
      'orders',
      JSON.stringify(
        JSON.parse(localStorage.getItem('orders') || '[]').map((o) =>
          o.id === id ? { ...o, status: 'Cancelled' } : o
        )
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-prata text-[#006A71] mb-10 text-center">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-10">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-200"
            >
              {/* Top Info */}
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-5 gap-4">
                <div>
                  <p className="text-sm text-gray-500">🧾 Order ID: #{order.id}</p>
                  <p className="text-sm text-gray-500">📅 Date: {order.date}</p>
                </div>
                <button
                  onClick={() => handleCancel(order.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow-sm"
                >
                  Cancel Order
                </button>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
                {order.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-3 p-3 bg-[#F9FAFB] border rounded-md shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity} × ₹{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between text-[#006A71] font-semibold border-t pt-4">
                <p>Total</p>
                <p>₹{order.total.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

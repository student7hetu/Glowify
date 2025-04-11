import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const cancelOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-prata text-[#006A71] mb-8 text-center">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500">
          No orders yet.{' '}
          <Link to="/categories" className="text-[#006A71] underline">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#006A71]">Order #{order.id}</h2>
                <button
                  onClick={() => cancelOrder(order.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Cancel Order
                </button>
              </div>

              <p className="text-sm text-gray-600">📅 Placed on: {order.date}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {order.items.map((item) => (
                  <div key={item._id} className="flex items-center gap-4 border p-3 rounded">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 text-sm text-gray-700 space-y-1">
                <p>
                  <strong>Total:</strong> ₹{order.total}
                </p>
                <p>
                  <strong>Shipping To:</strong> {order.shipping.firstName} {order.shipping.lastName},{' '}
                  {order.shipping.street}, {order.shipping.city}
                </p>
                {order.giftWrap && (
                  <p className="text-green-700 font-medium">🎁 Gift Wrapping Included</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

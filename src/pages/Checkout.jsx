// src/pages/Checkout.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

export default function Checkout() {
  const { cart, clearCart, placeOrder } = useProductContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = cart.length > 0 ? 10 : 0;
  const total = subtotal + shippingFee;

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Use placeOrder from context
    placeOrder({
      ...formData,
      total,
    });

    alert('Order placed successfully!');
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-prata text-[#006A71] mb-8 text-center">Delivery Information</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 mb-4">Your cart is empty. Please add items to checkout.</p>
          <Link to="/categories">
            <button className="bg-[#48A6A7] text-white px-6 py-2 rounded hover:bg-[#006A71]">
              Back to Categories
            </button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-10">
          {/* FORM */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              required
              value={formData.street}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                value={formData.city}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                required
                value={formData.state}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="zipcode"
                placeholder="Zip Code"
                required
                value={formData.zipcode}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                value={formData.country}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          {/* CART TOTALS */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4 h-fit">
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
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              <p className="text-sm text-gray-600 mb-4">Cash On Delivery</p>
              <button
                type="submit"
                className="w-full bg-[#48A6A7] hover:bg-[#006A71] text-white py-3 rounded-lg font-semibold transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

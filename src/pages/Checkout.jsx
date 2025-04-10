import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useProductContext();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = cart.length > 0 ? 10 : 0;
  const total = subtotal + shippingFee;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    paymentMethod: 'cod',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    clearCart(); // 🧹 clear cart items
    navigate('/cart'); // 🔁 redirect to cart page
  };

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-prata text-[#006A71] mb-8 text-center">Delivery Information</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded col-span-1 md:col-span-2"
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded col-span-1 md:col-span-2"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          value={formData.zip}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded col-span-1 md:col-span-2"
        />

        {/* Cart Summary */}
        <div className="bg-[#F2EFE7] p-4 rounded-md shadow col-span-1 md:col-span-2">
          <h2 className="text-2xl font-prata text-[#006A71] mb-4">Cart Totals</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee:</span>
              <span>₹{shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2 text-[#006A71]">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6">
            <label className="block font-medium mb-2">Payment Method</label>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleChange}
              />
              <label htmlFor="cod" className="text-gray-700">Cash On Delivery</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full col-span-1 md:col-span-2 bg-[#48A6A7] hover:bg-[#006A71] text-white py-3 rounded-lg font-semibold transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

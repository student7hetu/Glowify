// src/pages/Home.jsx
import { useProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { FaUndoAlt, FaClock, FaHeadset } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; 
import banner from '../assets/Banner.jpg';
import { categoryImages } from '../assets/categories'; 

export default function Home() {
  const { products } = useProductContext();
  const { user } = useAuth();

  const latestProducts = products.filter((p) => p.latest);
  const bestSellers = products.filter((p) => p.bestseller);

  return (
    <div className="bg-[#dbe0e1]">

      {/* BANNER */}
      <div className='w-full h-full mask-b-from-90%  mask-t-from-80%  mask-l-from-90%  mask-r-from-90% '>
        <img
          src={banner}
          alt="Glowify Banner"
          className="w-full object-cover h-[300px] md:h-[450px]"
        />
      </div>

      {/* Personalized Welcome */}
      <div className="text-center py-6">
        <h2 className="text-2xl font-prata text-[#006A71]">
          {user
            ? `Hey ${user.name || 'Glow Queen'} 👋 ready for your next Glow-up?`
            : 'Welcome to Glowify, let your skin shine 🌟'}
        </h2>
      </div>

      {/* SHOP BY CATEGORY */}
<section className="max-w-7xl mx-auto px-4 py-10 mt-20">
  <h2 className="text-3xl font-prata text-[#006A71] mb-4">Shop by Category</h2>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {['Skincare', 'Haircare', 'Bodycare', 'Wellness'].map((categoryName, index) => (
      <Link
        to={`/category/cat${index + 1}`}
        key={categoryName}
        className="bg-white p-3 rounded-lg shadow hover:shadow-lg transition text-center"
      >
        <img
  src={categoryImages[categoryName]}
  alt={categoryName}
  className="w-full h-32 object-cover rounded mb-3"
/>

        <h3 className="text-md font-semibold text-[#006A71]">{categoryName}</h3>
      </Link>
    ))}
  </div>
</section>

      {/* LATEST COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-prata text-[#006A71] mb-2">Latest Collection</h2>
        <p className="text-gray-600 mb-6">
          Explore our latest collection of personal care essentials crafted for comfort and wellness.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {latestProducts.map((item) => (
            <Link to={`/product/${item._id}`} key={item._id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-[#48A6A7] font-bold">₹{item.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-prata text-[#006A71] mb-2">Best Sellers</h2>
        <p className="text-gray-600 mb-6">
          Explore our top-rated personal care products loved by our customers for quality and results.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {bestSellers.map((item) => (
            <Link to={`/product/${item._id}`} key={item._id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-[#48A6A7] font-bold">₹{item.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* POLICIES */}
      <section className="bg-white py-10 px-4 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <FaUndoAlt size={30} className="text-[#006A71] mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-1">Exchange Policy</h4>
            <p className="text-sm text-gray-600">We offer free exchange on all products.</p>
          </div>
          <div>
            <FaClock size={30} className="text-[#006A71] mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-1">3 Days Return</h4>
            <p className="text-sm text-gray-600">Return within 3 days hassle-free.</p>
          </div>
          <div>
            <FaHeadset size={30} className="text-[#006A71] mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-1">24/7 Support</h4>
            <p className="text-sm text-gray-600">We’re here to help anytime.</p>
          </div>
        </div>
      </section>

      {/* FEEDBACK SECTION */}
<section className="bg-[#F2EFE7] py-12 px-4">
  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
    <h2 className="text-3xl font-prata text-[#006A71] mb-4">We’d love your feedback!</h2>
    <p className="text-gray-600 mb-6">
      Tell us how we're doing, what you love, or what we can improve!
    </p>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you for your feedback! 🧡');
        e.target.reset();
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-lg w-full"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded-lg w-full"
        />
      </div>
      <input
        type="text"
        name="subject"
        required
        placeholder="Subject"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <textarea
        name="message"
        rows="5"
        required
        placeholder="Your Feedback"
        className="w-full p-3 border border-gray-300 rounded-lg"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#48A6A7] hover:bg-[#006A71] text-white font-semibold py-3 rounded-lg transition"
      >
        Submit Feedback
      </button>
    </form>
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-[#006A71] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-2">Glowify</h4>
            <p className="text-sm text-gray-100">
              High-quality personal care products designed with premium ingredients and thoughtful formulas for everyday use.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Company</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/delivery">Delivery</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/contact">Connect Us</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <p className="text-sm">📞 +91 9099999999</p>
            <p className="text-sm">📧 hello@glowify.com</p>
            <p className="text-xs text-gray-300 mt-4">© 2024 Glowify. All rights reserved.</p>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

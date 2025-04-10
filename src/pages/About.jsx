// src/pages/About.jsx
export default function About() {
    return (
      <div className="bg-[#F2EFE7] min-h-screen py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-8">
  
          {/* TITLE */}
          <h1 className="text-4xl font-prata text-[#006A71]">About Glowify</h1>
  
          {/* DESCRIPTION */}
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="text-[#48A6A7] font-semibold">Glowify</span>, we believe personal care is self-love. Our mission is to empower individuals with premium personal care products that are not only safe and effective — but also crafted with love, care, and quality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it’s skincare, haircare, or body care — every product we offer is made to elevate your daily wellness rituals. Glowify blends tradition with innovation to bring you a range that’s gentle, sustainable, and powerful.
          </p>
  
          {/* WHY GLOWIFY */}
          <div className="mt-10">
            <h2 className="text-3xl font-prata text-[#006A71] mb-6">Why Choose Glowify</h2>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F2EFE7] p-6 rounded-lg border shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">🌿 Premium Quality</h3>
                <p className="text-gray-600 text-sm">
                  We use natural ingredients and dermatologically-tested formulas for safe and effective results.
                </p>
              </div>
  
              <div className="bg-[#F2EFE7] p-6 rounded-lg border shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">💰 Affordable Pricing</h3>
                <p className="text-gray-600 text-sm">
                  High-quality personal care doesn’t have to be expensive. We offer great value without compromise.
                </p>
              </div>
  
              <div className="bg-[#F2EFE7] p-6 rounded-lg border shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">🚚 Reliable Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Fast, reliable, and eco-conscious packaging ensures your wellness doesn’t wait.
                </p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
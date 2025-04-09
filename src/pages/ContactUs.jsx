import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://personalcarebackend.onrender.com/storeContactInquiry', formData);
      alert('Message sent successfully!');
      setFormData({
        username: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Try again!');
    }
  };

  return (
    <div className="min-h-screen bg-[#F2EFE7] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Form Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-[#48A6A7]">
          <h2 className="text-3xl font-bold text-[#006A71] mb-4">GET IN TOUCH</h2>
          <p className="text-[#006A71] mb-6">
            Have a question or need assistance? Fill out the form below and we’ll reach out to you soon.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="username"
                placeholder="Name*"
                value={formData.username}
                onChange={handleChange}
                required
                className="p-3 border border-[#9ACBD0] rounded outline-[#48A6A7]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border border-[#9ACBD0] rounded outline-[#48A6A7]"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#9ACBD0] rounded outline-[#48A6A7]"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#9ACBD0] rounded outline-[#48A6A7]"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#9ACBD0] rounded outline-[#48A6A7]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#48A6A7] hover:bg-[#006A71] text-white font-bold py-3 rounded transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="bg-[#006A71] text-white p-8 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">CONTACT INFORMATION</h3>
            <p className="mb-4">For immediate assistance, you can contact us directly:</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">💬 Customer Support</p>
                <p>support@glowify.com</p>
              </div>
              <div>
                <p className="font-bold">📩 Sales Inquiries</p>
                <p>sales@glowify.com</p>
              </div>
              <div>
                <p className="font-bold">📞 Phone</p>
                <p>+1-800-123-4567</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/lipstick.png"
              alt="lipstick"
              className="w-16 opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

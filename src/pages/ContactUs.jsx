// src/pages/ContactUs.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          username: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error?.text || error);
        alert('Something went wrong. Please try again!');
      });
      
  };

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-prata text-[#006A71] mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Got questions or need help? Fill out the form below and we’ll get back to you shortly!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Your Name*"
              required
              value={formData.username}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message*"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#48A6A7] hover:bg-[#006A71] text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

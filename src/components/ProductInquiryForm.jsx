// src/components/ProductInquiryForm.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ProductInquiryForm = ({ product }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Inquiry sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send inquiry. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#9ACBD0] p-6 rounded shadow-md">
      <h2 className="text-lg font-bold text-[#006A71] mb-4">Product Inquiry</h2>
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="hidden" name="productId" value={product?._id || ""} />
        <input type="hidden" name="productName" value={product?.name || ""} />

        <input
          name="username"
          placeholder="Your Name"
          required
          className="border border-[#48A6A7] p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-[#48A6A7] p-2 rounded"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          required
          className="border border-[#48A6A7] p-2 rounded"
        />
        <input
          name="qty"
          placeholder="Quantity"
          required
          className="border border-[#48A6A7] p-2 rounded"
        />
        <input
          name="subject"
          placeholder="Subject"
          required
          className="border border-[#48A6A7] p-2 rounded"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="border border-[#48A6A7] p-2 rounded"
        />
        <button
          type="submit"
          className="bg-[#006A71] text-white p-2 rounded hover:bg-[#048a8c] transition"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

export default ProductInquiryForm;

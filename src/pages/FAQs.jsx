import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 3-day hassle-free return policy. Items must be unused and in original packaging.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery typically takes 3–7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within India. We’re working on expanding internationally soon!",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you’ll receive a tracking ID via email.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, cards, net banking, and Cash on Delivery.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE7] py-12 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-prata text-[#006A71] mb-10 text-center">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md transition hover:shadow-lg"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 font-medium text-left text-[#006A71] text-lg focus:outline-none"
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180 text-[#48A6A7]" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 px-5 ${
                activeIndex === index ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

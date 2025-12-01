import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "John Doe",
    text: "The service was fantastic! My carpets have never looked better.",
    rating: 5
  },
  {
    name: "Jane Smith",
    text: "Very professional and reliable. Highly recommend Clean It NI.",
    rating: 4
  },
  {
    name: "Emily White",
    text: "Great experience from start to finish. Efficient and eco-friendly.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-blue-100 to-green-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-blue-600 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Testimonials
        </h2>
        <p className="text-lg text-center mb-16">Hear from our satisfied clients about their experiences with Clean It NI.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition transform duration-500 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <h3 className="ml-4 text-xl font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.417 8.267L12 18.897l-7.417 4.642L6 15.272 0 9.423l8.332-1.268L12 .587z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
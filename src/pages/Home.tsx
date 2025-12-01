import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <section className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&h=1080&fit=crop')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center text-white">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Clean It NI
          </h1>
          <p className="text-xl mb-8">Professional Cleaning Services Across Northern Ireland</p>
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get a Free Quote
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">Carpet Cleaning</h3>
              <p>Get your carpets looking fresh and new with our professional cleaning services.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">Window Cleaning</h3>
              <p>Crystal clear windows that let the light shine through beautifully.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">Office Cleaning</h3>
              <p>Maintain a spotless and professional office environment with our help.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
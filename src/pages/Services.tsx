import React from 'react';

const Services = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12 text-center text-blue-600">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105">
            <img src="https://images.unsplash.com/photo-1574706472779-1d5d1f9f094a?w=400&h=300&fit=crop" alt="Carpet Cleaning" className="w-full rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">Domestic Carpet Cleaning</h3>
            <p className="text-gray-700 mb-4">Experience a fresh and clean carpet with our professional services tailored for your home.</p>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">Request a Quote</button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop" alt="Commercial Carpet Cleaning" className="w-full rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">Commercial Carpet Cleaning</h3>
            <p className="text-gray-700 mb-4">Keep your business environment clean and professional with our expert cleaning services.</p>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">Request a Quote</button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop" alt="Upholstery Cleaning" className="w-full rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">Upholstery Cleaning</h3>
            <p className="text-gray-700 mb-4">Enhance the look and feel of your furniture with our upholstery cleaning service.</p>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">Request a Quote</button>
          </div>
          {/* Repeat similar structure for other services */}
        </div>
      </div>
    </div>
  );
};

export default Services;
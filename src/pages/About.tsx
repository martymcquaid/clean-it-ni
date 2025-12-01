import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-blue-600">About Us</h2>
            <p className="text-lg mb-6">
              Welcome to <span className="text-green-600">Clean It NI</span>, your trusted cleaning service provider in Northern Ireland.
              Our mission is to deliver top-notch cleaning services that exceed our clients' expectations.
            </p>
            <p className="text-lg mb-6">
              With a team of experienced professionals and eco-friendly products, we ensure that your spaces are not only clean
              but also safe for you and the environment.
            </p>
            <ul className="list-disc list-inside text-lg mb-6">
              <li>Fast, reliable, and high-quality cleaning services</li>
              <li>Trained & fully insured technicians</li>
              <li>Eco-friendly and modern equipment</li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&h=500&fit=crop"
              alt="Our Team"
              className="rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-4xl font-semibold mb-4 text-blue-600">Our Mission</h3>
          <p className="text-lg max-w-3xl mx-auto">
            At Clean It NI, we are committed to providing exceptional cleaning services while promoting a sustainable and healthy environment.
            Our goal is to build lasting relationships with our clients through trust, quality, and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
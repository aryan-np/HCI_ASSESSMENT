import React from 'react';
import dummyCars from './CarList';
import { useNavigate } from 'react-router-dom';

const FeaturedCars = () => {
  const featuredCars = dummyCars.slice(0, 2);
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">Featured Cars</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover hand-selected models built for power, style, and future-forward driving.
        </p>
      </section>

      {/* Car Cards */}
      <section className="py-12 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-60 object-contain"
              />

              {/* Car Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-500 mb-1">{car.name}</h2>
                <p className="text-black mb-4">{car.highlight}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Specs */}
                <div className="text-sm text-black mb-4">
                  {Object.entries(car.specs).map(([label, value]) => (
                    <p key={label}>
                      <strong>{label}:</strong> {value}
                    </p>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* <button
                    className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-white hover:text-black transition"
                    onClick={() => navigate(`/car/${car.id}`)}
                  >
                    View Details
                  </button> */}
                  <button
                    className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-yellow-500 hover:text-black transition"
                    onClick={() => navigate(`/prebook/${car.id}`)}
                  >
                    Pre Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedCars;

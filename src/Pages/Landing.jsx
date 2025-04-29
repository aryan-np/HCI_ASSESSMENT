import React from 'react';


const Landing = () => {
  return (
    <section className="relative h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/your-luxury-car-image.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="z-10 max-w-3xl text-royal-white">
        <h1 className="text-5xl md:text-6xl font-bold text-royal-gold mb-6 drop-shadow-lg">
          Experience the Royal Drive
        </h1>
        <p className="text-lg md:text-xl font-light text-royal-silver mb-8">
          Unmatched luxury. Timeless elegance. Engineered to inspire.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-royal-gold text-royal-black px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition duration-300">
            Book a Test Drive
          </button>
          <button className="border border-royal-gold text-royal-gold px-6 py-3 rounded-full text-sm font-semibold hover:bg-royal-gold hover:text-royal-black transition duration-300">
            Explore Cars
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;

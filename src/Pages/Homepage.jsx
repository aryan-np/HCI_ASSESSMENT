import ImgCar from '../assets/erasebg-transformed.webp';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import ImgCar1 from '../assets/erasebg-transformed.webp';
import ImgCar2 from '../assets/front_car2.png';
import ImgCar3 from '../assets/front_car3.png'; // Add more images as needed
import ImgCar4 from '../assets/front_car4.webp'; // Add more images as needed

const Homepage = () => {
  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 py-16 min-h-screen bg-[#121212] text-white shadow-xl">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#d4af37] leading-tight">
            Welcome to <br />The Royal Oak Drives
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Find, Customize, and Book Your Dream Car with premium care and royal treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <Link
              to="/models"
              className="bg-[#d4af37] text-black px-6 py-3 rounded-xl hover:bg-white hover:text-[#121212] transition shadow text-center"
            >
              Explore Cars
            </Link>
            <Link
              to="/login"
              className="bg-black text-white border border-[#d4af37] px-6 py-3 rounded-xl hover:bg-[#d4af37] hover:text-black transition shadow text-center"
            >
              Login / Signup
            </Link>
          </div>
        </div>

        {/* Image Slider */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000, // 3 seconds per slide
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-11/12 sm:w-3/4 md:w-full rounded-xl drop-shadow-2xl"
          >
            <SwiperSlide>
              <img
                src={ImgCar1}
                alt="Luxury Car 1"
                className="w-full h-auto object-contain rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ImgCar2}
                alt="Luxury Car 2"
                className="w-full h-auto object-contain rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ImgCar3}
                alt="Luxury Car 3"
                className="w-full h-auto object-contain rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ImgCar4}
                alt="Luxury Car 3"
                className="w-full h-auto object-contain rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#e5e5e5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#d4af37] mb-2">Customize Your Ride</h3>
            <p className="text-sm text-gray-700">Tailor your vehicle's design, features, and trims. Build it to reflect your lifestyle.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#d4af37] mb-2">Book a Test Drive</h3>
            <p className="text-sm text-gray-700">Choose your route, date, and time — experience the car on your terms.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#d4af37] mb-2">Exclusive Offers</h3>
            <p className="text-sm text-gray-700">Unlock finance deals, limited-time discounts, and elite loyalty perks.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-[#121212]">The Royal Standard</h2>
          <p className="text-gray-700 text-lg">
            At The Royal Oak Drives, we combine innovation with class. We bring you luxury, reliability, and personalized service that redefines car ownership.
          </p>
          <Link
            to="/about"
            className="inline-block mt-4 px-6 py-3 bg-[#121212] text-white rounded-xl hover:bg-[#d4af37] hover:text-black transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-16 bg-[#121212] text-white text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-[#d4af37]">What Our Customers Say</h2>
          <p className="text-gray-300 text-lg italic">
            “The best luxury car experience I’ve ever had. Every step felt personalized and premium.”
          </p>
          <Link
            to="/testimonials"
            className="inline-block mt-4 px-6 py-3 bg-[#d4af37] text-black rounded-xl hover:bg-white transition"
          >
            View Testimonials
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

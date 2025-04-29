// pages/AboutUs.jsx

const AboutUs = () => {

  
const testimonials = [
  {
    id: 1,
    user: 'Alex M.',
    review: 'The booking process was smooth and fast. Love the customization!',
    avatar: '/images/avatar1.png',
  },
  {
    id: 2,
    user: 'Sophie W.',
    review: 'Got a great deal thanks to their finance options. 10/10 experience!',
    avatar: '/images/avatar2.png',
  },
  {
    id: 3,
    user: 'Jordan P.',
    review: 'The test drive booking and support team were incredibly helpful.',
    avatar: '/images/avatar3.png',
  },
];

    return (
      <div className="bg-white min-h-screen text-black py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gold mb-6">About The Royal Oak Drives</h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At <span className="text-black font-semibold">The Royal Oak Drives</span>, we believe car ownership should be as thrilling as the drive itself. We’re more than a car
            platform — we’re a *luxury-first* experience tailored around your dreams and lifestyle.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            From browsing the finest selections to customizing every detail, booking test drives, and discovering
            exclusive offers, our platform is crafted for ease, performance, and style. We fuse technology and
            personalization to make your journey smooth from click to key.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're here to explore, test, or take home your next car — welcome to The Royal Oak Drives. We're here to empower
            your drive with confidence, class, and care.
          </p>
        </div>
  
        {/* Optional: Add Team/Stats/Trust Section */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gold">500+</h3>
            <p className="text-gray-700 mt-2">Luxury Models Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gold">1,200+</h3>
            <p className="text-gray-700 mt-2">Test Drives Booked</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gold">24/7</h3>
            <p className="text-gray-700 mt-2">Support & Service</p>
          </div>
        </div>


        <div className="bg-white min-h-screen text-black py-20 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gold mb-4">What Our Customers Say</h1>
          <p className="text-lg text-gray-700">
            Real feedback from real drivers. Your dream car is just the beginning of a luxury experience.
          </p>
        </div>
  
        {/* Testimonial Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-silver border border-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 relative"
            >
              {/* Gold Quote Mark */}
              <span className="absolute top-4 left-4 text-4xl text-gold font-serif">“</span>
  
              {/* Content */}
              <div className="pt-8">
                <p className="text-gray-800 italic leading-relaxed mb-6">{t.review}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.user}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                  />
                  <div>
                    <p className="font-semibold text-black">{t.user}</p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>



    );
  };
  
  export default AboutUs;
  
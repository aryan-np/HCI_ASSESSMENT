import React, { useState } from 'react';

const OffersPromotions = () => {
  const [voucher, setVoucher] = useState(null);

  const offers = [
    {
      id: 1,
      title: '0% Finance for 12 Months',
      description: 'Drive now and pay later with 0% interest financing for one full year. Available on select premium models.',
      highlights: ['No down payment required', 'Instant online approval', 'Flexible EMI plans'],
      buttonText: 'Get Voucher',
    },
    {
      id: 2,
      title: '$1000 Off First Purchase',
      description: 'New customers enjoy an instant $1000 discount on their first car purchase — no hidden terms.',
      highlights: ['Valid on all new car bookings', 'Apply at checkout', 'Limited time offer'],
      buttonText: 'Get Voucher',
    },
    {
      id: 3,
      title: '1 Year Free Maintenance',
      description: 'Enjoy a full year of worry-free driving with complimentary scheduled service on every new car purchase.',
      highlights: ['Covers oil changes, inspections', 'Nationwide service support', 'No additional cost'],
      buttonText: 'Get Voucher',
    },
  ];

  const generateSimpleCode = () => {
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    setVoucher(`AUTO-${random}`);
  };

  return (
    <div className="min-h-screen bg-white text-black font-body">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-[#d4af37] mb-4">Exclusive Offers & Promotions</h1>
        <p className="text-lg text-[#e5e5e5] max-w-3xl mx-auto">
          Unlock savings and premium benefits tailored just for you.
        </p>
      </section>

      {/* Offers */}
      <section className="py-16 px-4 sm:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Available Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white p-6 rounded-xl border shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-2">{offer.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{offer.description}</p>
              <ul className="text-xs text-gray-600 list-disc list-inside mb-4">
                {offer.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button
                onClick={generateSimpleCode}
                className="w-full bg-[#d4af37] text-white px-4 py-2 rounded hover:bg-[#c0a12c] transition"
              >
                {offer.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Voucher Display */}
        {voucher && (
          <div className="mt-10 text-center border-t pt-6">
            <p className="text-sm text-gray-600">🎁 Your voucher code:</p>
            <p className="text-xl font-bold text-[#d4af37] tracking-wide">{voucher}</p>
            <button
              onClick={() => navigator.clipboard.writeText(voucher)}
              className="mt-2 text-sm text-blue-600 underline hover:text-blue-800"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default OffersPromotions;
 
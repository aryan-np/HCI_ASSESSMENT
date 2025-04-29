import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import dummyCars from './CarList';

const CarDetail = () => {
  const { carid } = useParams();
  const navigate = useNavigate();

  const [showOfferModal, setShowOfferModal] = useState(false);
  const [voucher, setVoucher] = useState('');
  const [message, setMessage] = useState('');

  const car = dummyCars.find((c) => c.id.toString() === carid);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Car not found.
      </div>
    );
  }

  const handleApplyVoucher = () => {
    if (voucher.trim() === 'DISCOUNT50') {
      setMessage('Congratulations! You received a 50% discount!');
    } else if (voucher.trim() === 'FREESERVICE') {
      setMessage('You received 1 year of free service!');
    } else {
      setMessage('Invalid voucher code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      {/* Header Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gold mb-2">{car.name}</h1>
        <p className="text-silver text-lg">{car.highlight}</p>
        <p className="text-2xl font-semibold text-black mt-2">{car.price}</p>
        {/* Placeholder Rating */}
        <div className="mt-2 text-yellow-500 text-lg">★★★★☆ (4.5/5)</div>
      </section>

      {/* Car Image */}
      <div className="mb-10 max-w-4xl mx-auto">
        <img
          src={car.image}
          alt={car.name}
          className="w-full max-h-[500px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Car Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Specifications */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Specifications</h2>
          <div className="space-y-2 text-black">
            {Object.entries(car.specs).map(([label, value]) => (
              <p key={label}>
                <strong>{label}:</strong> {value}
              </p>
            ))}
          </div>
        </div>

        {/* Tags + Actions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Highlights</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {car.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-black text-white text-sm font-medium px-4 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <button
              className="bg-gold text-black py-3 rounded font-semibold hover:bg-white hover:border hover:border-gold transition"
              onClick={() => navigate(`/customize/${car.id}`)}
            >
              Customize
            </button>

            <button
              className="bg-black text-white py-3 rounded font-semibold hover:bg-gold hover:text-black transition"
              onClick={() => navigate(`/book-test-drive/${car.id}`)}
            >
              Book Test Drive
            </button>

            <button
              className="bg-silver text-black py-3 rounded font-semibold hover:bg-white transition"
              onClick={() => setShowOfferModal(true)}
            >
              Apply Offer
            </button>

            <button
              className="bg-white border border-black text-black py-3 rounded font-semibold hover:bg-silver transition"
              onClick={() => navigate('/contact')}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Offer Modal */}
      {showOfferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4 text-gold">Enter Voucher Code</h2>

            <input
              type="text"
              value={voucher}
              onChange={(e) => setVoucher(e.target.value)}
              placeholder="Enter code..."
              className="w-full p-2 border rounded mb-4"
            />

            {message && <p className="mb-4 text-center text-black">{message}</p>}

            <div className="flex justify-between">
              <button
                className="bg-gold text-black py-2 px-4 rounded font-semibold hover:bg-black hover:text-white transition"
                onClick={handleApplyVoucher}
              >
                Apply
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded font-semibold hover:bg-red-700 transition"
                onClick={() => {
                  setShowOfferModal(false);
                  setVoucher('');
                  setMessage('');
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetail;

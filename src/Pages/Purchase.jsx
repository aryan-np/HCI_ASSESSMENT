// pages/Purchase.jsx
import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import dummyCars from './CarList';
import { ArrowLeft } from 'lucide-react';

const Purchase = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const car = dummyCars.find(c => c.id === parseInt(carId));
  const [submitted, setSubmitted] = useState(false);

  // Extract currency from query string
  const queryParams = new URLSearchParams(location.search);
  const currency = queryParams.get('currency') || 'USD';

  const currencyRates = {
    USD: 1,
    NPR: 132,
    EUR: 0.93,
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    financeOption: 'Full Payment',
    voucher: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const convertPrice = (priceString) => {
    const numericPrice = parseFloat(priceString.replace(/[^\d.]/g, ''));
    const converted = numericPrice * currencyRates[currency];
    return converted;
  };

  const formatPrice = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: currency,
    });
  };

  const getDisplayPrice = () => {
    const converted = convertPrice(car.price);
    return formatPrice(converted);
  };

  const getDiscountedPrice = (priceString) => {
    const discounted = convertPrice(priceString) * 0.95;
    return formatPrice(discounted);
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl">
        <button
          onClick={() => navigate("/models")}
          type="button"
          className="relative top-4 left-4 bg-royal-gold text-royal-black p-2 rounded-full hover:scale-110 transition duration-300"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center text-[#121212] mb-6">Application for Purchase</h1>

          {car && (
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 bg-[#f9f9f9] p-4 rounded-lg shadow">
              <img
                src={car.image}
                alt={car.name}
                className="w-full md:w-60 h-40 object-cover rounded-lg"
              />
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold text-[#121212] mt-10">{car.name}</h2>
                {formData.voucher ? (
                  <p className="text-lg text-[#d4af37] font-bold">
                    <span className="line-through text-gray-500 mr-2">{getDisplayPrice()}</span>
                    {getDiscountedPrice(car.price)}
                  </p>
                ) : (
                  <p className="text-lg text-[#d4af37] font-bold">{getDisplayPrice()}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#121212] font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Voucher</label>
              <input
                type="text"
                name="voucher"
                value={formData.voucher}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Finance Option</label>
              <select
                name="financeOption"
                value={formData.financeOption}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              >
                <option value="Full Payment">Full Payment</option>
                <option value="EMI Plan">EMI Plan</option>
                <option value="Lease">Lease</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-[#121212] font-semibold py-3 rounded hover:bg-[#b9952c] transition"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-[#121212] mb-4">Application Submitted!</h2>
            <p className="text-[#333] mb-6">
              Thank you for your interest in the <span className="font-semibold">{car?.name}</span>. Our team will contact you shortly.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-[#594E4E] text-white rounded hover:bg-[#463a3a] transition"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;

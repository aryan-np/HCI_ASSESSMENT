import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaVolumeUp, FaVolumeMute, FaCalculator } from 'react-icons/fa';
import dummyCars from './CarList';
import PlaySound from '../components/PlaySound';
import Popup from '../components/Popup';

const CarsListing = () => {
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(dummyCars[0]);
  const [isSaved, setIsSaved] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [currency, setCurrency] = useState('USD');

  const currencyRates = {
    USD: 1,
    NPR: 132,  // Example: 1 USD = 132 NPR
    EUR: 0.93  // Example: 1 USD = 0.93 EUR
  };

  const handlePurchase = () => {
    navigate(`/purchase/${selectedCar.id}?currency=${currency}`);
  };

  const handleTestDrive = () => {
    navigate(`/book-test-drive/${selectedCar.id}`);
  };

  const handleCustomize = () => {
    navigate(`/customize/${selectedCar.id}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
    setPopupMessage(isSaved ? 'Removed from Saved Cars' : 'Saved this Car!');
    setShowPopup(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const renderSpecifications = (specs) => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg mt-6">
        <h3 className="text-xl font-semibold mb-4">Full Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="font-medium">{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getConvertedPrice = () => {
    const numericPrice = parseFloat(selectedCar.price.replace(/[^0-9.]/g, ''));
    const converted = numericPrice * currencyRates[currency];
    return `${currency} ${converted.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-body px-4 md:px-12 py-10 text-[#2c2c2c]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Car List */}
        <div className="md:w-1/4 space-y-4">
          {dummyCars.map((car) => (
            <div
              key={car.id}
              onClick={() => setSelectedCar(car)}
              className={`p-4 cursor-pointer rounded-lg border shadow-sm hover:shadow-md transition ${selectedCar.id === car.id ? 'bg-[#594E4E] text-white' : 'bg-white text-gray-800'}`}
              role="button"
            >
              <h2 className="text-lg font-semibold">{car.name}</h2>
              <p className="text-sm">{car.year} • {car.fuel}</p>
            </div>
          ))}
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="mt-6 bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        {/* Main Car Display */}
        <div className="md:w-3/4 bg-white p-6 rounded-xl shadow relative">
          <div className="rounded overflow-hidden shadow mb-6">
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>

          <div className="flex items-center gap-6 mb-6 justify-center">
            <button onClick={toggleSave} className="text-3xl text-red-500 hover:text-red-600 transition">
              {isSaved ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button onClick={toggleMute} className="text-3xl text-gray-600 hover:text-gray-800 transition">
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Price Box with Calculator Icon & Dropdown */}
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-sm text-gray-500 flex justify-center items-center gap-2">
                <FaCalculator className="text-black" />
                Price
              </h3>
              <p className="text-lg font-bold mt-2">{getConvertedPrice()}</p>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="mt-2 text-sm px-2 py-1 border rounded"
              >
                <option value="USD">USD</option>
                <option value="NPR">NPR</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-sm text-gray-500">Range</h3>
              <p className="text-lg font-bold">{selectedCar.mileage}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-sm text-gray-500">Fuel Type</h3>
              <p className="text-lg font-bold">{selectedCar.fuel}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={handleTestDrive}
              className="bg-[#594E4E] text-white px-6 py-2 rounded hover:bg-[#463a3a] transition"
            >
              Book For Test
            </button>

            <button
              onClick={handleCustomize}
              className="bg-[#d4af37] text-black px-6 py-2 rounded hover:bg-yellow-600 transition"
            >
              Customize
            </button>

            <button
              onClick={handlePurchase}
              className="border border-[#594E4E] text-[#594E4E] px-6 py-2 rounded hover:bg-[#594E4E] hover:text-white transition"
            >
              Apply to Purchase
            </button>
          </div>

          {/* Full Specifications Section */}
          {renderSpecifications(selectedCar.specs)}
        </div>
      </div>

      {/* Global Components */}
      <PlaySound play={!isMuted} />
      <Popup
        show={showPopup}
        message={popupMessage}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default CarsListing;

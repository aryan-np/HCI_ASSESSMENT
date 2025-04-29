import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dummyCars from './CarList'; // Import your car list
import defaultImg from '../assets/imageRed.jpg'; // fallback
// Special Lamborghini Images
import imgRed from '../assets/imageRed.jpg';
import imgBlue from '../assets/imageBlue.jpg';
import imgBlack from '../assets/imageBlack.jpg';
import imgWhite from '../assets/imageWhite.jpg';
import imgGreen from '../assets/imageGreen.jpg';

// Interior images
import interiorLeather from '../assets/leatherLambo.jpg';
import interiorSuede from '../assets/alcantaralambo.jpg';
import interiorAlcantara from '../assets/suedelambo.jpg';

// Wheel images
import wheelSport from '../assets/imageWheel1.jpg';
import wheelBlackAlloy from '../assets/imageWheel2.jpg';
import wheelChrome from '../assets/imageWheel3.jpg';

const CarCustomization = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [exterior, setExterior] = useState('');
  const [interior, setInterior] = useState('');
  const [wheels, setWheels] = useState('');
  const [addons, setAddons] = useState([]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const selected = dummyCars.find(c => c.id.toString() === id);
    setCar(selected);
  }, [id]);

  const toggleAddon = (addon) => {
    setAddons(prev => 
      prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]
    );
  };

  const handleContinueToBooking = () => {
    navigate(`/purchase/${car.id}`);
  };

  const colorStyles = {
    Red: 'bg-red-600 text-white border-red-600',
    Black: 'bg-[#121212] text-white border-[#121212]',
    White: 'bg-white text-black border-gray-300',
    Blue: 'bg-blue-600 text-white border-blue-600',
    Green: 'bg-[#e5e5e5] text-[#121212] border-[#e5e5e5]',
  };

  const isSpecialCar = car?.id === 1; // Lamborghini only

  const carImageByExterior = {
    Red: imgRed,
    Black: imgBlack,
    White: imgWhite,
    Blue: imgBlue,
    Green: imgGreen,
  };

  const carImageByInterior = {
    Leather: interiorLeather,
    Suede: interiorSuede,
    Alcantara: interiorAlcantara,
  };

  const carImageByWheels = {
    '18” Sport Wheels': wheelSport,
    '19” Black Alloy': wheelBlackAlloy,
    '20” Chrome': wheelChrome,
  };

  const getDisplayedImage = () => {
    if (!isSpecialCar) {
      return car?.image || defaultImg;
    }

    if (interior) {
      return carImageByInterior[interior];
    }

    if (wheels) {
      return carImageByWheels[wheels];
    }

    if (exterior) {
      return carImageByExterior[exterior] || imgRed;
    }

    return imgRed;
  };

  const handleExteriorChange = (color) => {
    setFade(true);
    setTimeout(() => {
      setExterior(color);
      setInterior(''); // reset interior
      setWheels(''); // reset wheels
      setFade(false);
    }, 200);
  };

  const handleInteriorChange = (material) => {
    setFade(true);
    setTimeout(() => {
      setInterior(material);
      setFade(false);
    }, 200);
  };

  const handleWheelsChange = (wheel) => {
    setFade(true);
    setTimeout(() => {
      setWheels(wheel);
      setFade(false);
    }, 200);
  };

  if (!car) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="min-h-screen p-6 md:p-12 bg-[#f8f8f8] font-body">
      <h1 className="text-3xl font-bold text-center mb-10">Customize Your {car.name}</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side - Car Image and Summary */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <img
              src={getDisplayedImage()}
              alt={car.name}
              className={`w-full h-[400px] object-contain mx-auto rounded transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <div className="space-y-2">
              <p><strong>Model:</strong> {car.name}</p>
              <p><strong>Exterior:</strong> {exterior || 'Not selected'}</p>
              <p><strong>Interior:</strong> {interior || 'Not selected'}</p>
              <p><strong>Wheels:</strong> {wheels || 'Not selected'}</p>
              <p><strong>Add-ons:</strong> {addons.length > 0 ? addons.join(', ') : 'None selected'}</p>
            </div>

            <button
              onClick={handleContinueToBooking}
              className="mt-6 w-full bg-[#d4af37] hover:bg-[#c19e32] text-white font-semibold py-3 rounded-xl transition"
            >
              Continue to Booking
            </button>
          </div>
        </div>

        {/* Right side - Customization options */}
        <div className="md:w-1/2 space-y-8">
  
         
          {/* Exterior */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">2. Choose Exterior Color</h2>
            <div className="flex flex-wrap gap-3">
              {Object.keys(colorStyles).map(color => (
                <button
                  key={color}
                  className={`px-5 py-2 rounded-full border-2 transition-all duration-300 ${
                    exterior === color ? colorStyles[color] : 'bg-white text-[#121212] border-gray-300 hover:border-[#d4af37]'
                  }`}
                  onClick={() => handleExteriorChange(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </section>

          {/* wheels */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">1. Choose Wheel Design</h2>
            <div className="flex flex-wrap gap-3">
              {['18” Sport Wheels', '19” Black Alloy', '20” Chrome'].map(option => (
                <button
                  key={option}
                  className={`px-5 py-2 rounded-full border-2 transition-all duration-300 ${
                    wheels === option
                      ? 'bg-[#d4af37] text-white border-[#d4af37]'
                      : 'bg-white text-[#121212] border-gray-300 hover:border-[#d4af37]'
                  }`}
                  onClick={() => handleWheelsChange(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>


          {/* Interior */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">3. Choose Interior Material</h2>
            <div className="flex flex-wrap gap-3">
              {['Leather', 'Suede', 'Alcantara'].map(material => (
                <button
                  key={material}
                  className={`px-5 py-2 rounded-full border-2 transition-all duration-300 ${
                    interior === material
                      ? 'bg-[#d4af37] text-white border-[#d4af37]'
                      : 'bg-white text-[#121212] border-gray-300 hover:border-[#d4af37]'
                  }`}
                  onClick={() => handleInteriorChange(material)}
                >
                  {material}
                </button>
              ))}
            </div>
          </section>

          {/* Add-ons */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">4. Select Add-ons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Sport Package', 'Panoramic Roof', 'Premium Sound', 'Driver Assist', 'Carbon Fiber Trim'].map(addon => (
                <label
                  key={addon}
                  className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm hover:shadow transition"
                >
                  <input
                    type="checkbox"
                    checked={addons.includes(addon)}
                    onChange={() => toggleAddon(addon)}
                  />
                  <span>{addon}</span>
                </label>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CarCustomization;

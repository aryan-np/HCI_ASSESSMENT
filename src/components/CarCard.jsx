import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ id, image, name, price, range }) => {
  return (
    <Link to={`/cars/${id}`}>
      <div className="bg-royal-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4 text-royal-black">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-sm mb-1">Price: {price}</p>
          <p className="text-sm">Range: {range} km</p>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarList from "./CarList";

function Favourites() {
  const navigate = useNavigate();

  // Placeholder for favourite car IDs — you can connect this to localStorage or backend
  const [favouriteIds, setFavouriteIds] = useState([1, 2]);

  const favouriteCars = CarList.filter((car) => favouriteIds.includes(car.id));

  const handleRemove = (id) => {
    setFavouriteIds(favouriteIds.filter((favId) => favId !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold">⭐ Your Favourites</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-gold text-black px-6 py-2 rounded-full hover:scale-105 transition"
          >
            ← Back
          </button>
        </div>

        {favouriteCars.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-2xl">No favourites yet.</h2>
            <p className="text-gray-400 mt-4">Start adding cars you love.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favouriteCars.map((car) => (
              <div
                key={car.id}
                className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <p className="text-gray-600">{car.engine} • {car.fuel}</p>
                  <p className="text-gold font-bold text-lg">{car.price}</p>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => navigate(`/car/${car.id}`)}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleRemove(car.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove ✖
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;

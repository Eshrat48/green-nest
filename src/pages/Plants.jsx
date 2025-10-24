// src/pages/Plants.jsx
import plants from '../data/plants'; // Adjust if your path differs
import { Link } from 'react-router-dom';

export default function Plants() {
  return (
    <section className="my-16 max-w-7xl mx-auto px-2">
      <h2 className="text-3xl font-bold mb-8 text-center">All Indoor Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="px-4 py-4 flex-1 flex flex-col">
              <div className="mb-1 flex flex-wrap gap-1">
                {plant.category && (
                  <span className="bg-green-50 text-green-600 px-2 rounded text-xs">{plant.category}</span>
                )}
                {plant.careLevel && (
                  <span className="bg-blue-50 text-blue-500 px-2 rounded text-xs">{plant.careLevel}</span>
                )}
                {plant.tags && plant.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-500 px-2 rounded text-xs">{tag}</span>
                ))}
              </div>
              <h4 className="font-semibold mt-2 mb-0 text-gray-900">{plant.plantName}</h4>
              <div className="flex items-center gap-2 mb-2 mt-1 text-yellow-600 text-sm">
                <span>★ {plant.rating}</span>
              </div>
              <span className="text-green-600 font-semibold text-lg mb-2">${plant.price}</span>
              <div className="flex-grow"></div>
              <Link to={`/plants/${plant.plantId}`}>
                <button className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 font-semibold transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

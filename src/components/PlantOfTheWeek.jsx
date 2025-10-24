// src/components/PlantOfTheWeek.jsx
import { useNavigate } from 'react-router-dom';
import plants from '../data/plants'; 

export default function PlantOfTheWeek() {
  const navigate = useNavigate();
  const featuredPlant = plants.find(plant => plant.plantId === 6);

  if (!featuredPlant) return null;

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            PLANT OF THE WEEK
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[400px] md:h-auto">
              <img
                src={featuredPlant.image}
                alt={featuredPlant.plantName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
                {featuredPlant.plantName}
              </h3>
              <p className="text-lg text-gray-600 mb-4 italic">
                {featuredPlant.category}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {featuredPlant.description}
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-semibold text-lg text-gray-600">{featuredPlant.rating} Rating</span>
                </div>
                <div className="text-2xl font-bold text-green-700">
                  ${featuredPlant.price}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-600 mb-3">Why this plant?</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {featuredPlant.careLevel} Care
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {featuredPlant.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {featuredPlant.availableStock} in Stock
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    By {featuredPlant.providerName}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/plants/${featuredPlant.plantId}`)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

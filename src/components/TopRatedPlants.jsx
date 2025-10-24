import plants from '../data/plants';
import { useNavigate } from 'react-router-dom';

export default function TopRatedPlants() {
  const navigate = useNavigate();
  const topPlants = [...plants].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    
    <div className="bg-[#ddf0e4ff]">
    <section className="my-50 max-w-6xl mx-auto py-16">
      <h3 className="text-green-700 text-center text-[65px] font-semibold mb-2 mt-2">
        Top Rated Indoor Plants
      </h3>
      <p className="text-gray-500 text-[18px] text-center mb-20 mt-8 max-w-lg mx-auto leading-relaxed tracking-wide">
        Discover our carefully curated collection of premium indoor plants, perfect for creating a green oasis in your home.
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topPlants.map((plant) => (
            <div
              key={plant.plantId}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col w-[300px] overflow-hidden"
            >
              <div className="w-full h-[340px] bg-gray-100">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                  <div className="flex flex-wrap gap-1 mb-1">
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs text-[16px]">{plant.category}</span>
                    <span className="bg-sky-50 text-sky-700 px-2 py-0.5 rounded text-xs text-[16px]">{plant.careLevel}</span>
                  </div>
                  <div className="font-semibold  text-[20px] text-gray-900 mb-1">{plant.plantName}</div>
                  <div className="flex items-center text-sm gap-2">
                    <span className="text-yellow-500 text-[22px]">★</span>
                    <span className="text-gray-500 text-[16px]">{plant.rating}</span>
                    <span className="text-green-400 ml-1 text-[16px]">${plant.price}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/login')}
                  className="mt-4 self-end bg-green-500 hover:bg-green-600 text-white rounded-md text-sm px-5 py-2 font-medium shadow"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

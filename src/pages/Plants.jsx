import plants from '../data/plants'
import { useNavigate } from 'react-router-dom'

export default function Plants() {
  const navigate = useNavigate()

  return (
    <section className="bg-[#ddf0e4ff] py-10 px-2 md:px-0 min-h-[100vh]">
      <h2 className="text-2xl font-semibold text-[#16a34a] mb-10 text-center text-[40px]">
        All Indoor Plants
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-7 place-items-center">
          {plants.map((plant) => (
            <div
              key={plant.plantId}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition h-[360px] w-72"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-26 h-36 object-cover rounded"
              />
              <div className="mt-4 mb-2 w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-[#16a34a]">{plant.plantName}</h3>
                <div className="text-sm text-gray-500">{plant.category}</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-500 text-[20px]">★</span>
                  <span className="font-semibold text-gray-600">{plant.rating}</span>
                </div>
                <div className="font-semibold text-lg text-[#15803d]">
                  ${plant.price}
                </div>
              </div>
              <button
                className="mt-3 px-5 py-[6px] rounded bg-[#16a34a] text-white font-medium hover:bg-[#15803d] transition"
                onClick={() => navigate(`/plants/${plant.plantId}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

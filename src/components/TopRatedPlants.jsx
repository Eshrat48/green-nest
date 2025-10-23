// TopRatedPlants.jsx
import plants from '../data/plants';
export default function TopRatedPlants() {
  // Sort by rating then slice top 6
  const topPlants = [...plants].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <section className="my-20 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold mb-10 text-center">Top Rated Indoor Plants</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {topPlants.map((plant) => (
          <div key={plant.plantId} className="shadow-lg rounded overflow-hidden bg-white">
            <img src={plant.image} alt={plant.plantName} className="w-full h-52 object-cover"/>
            <div className="p-4">
              <h4 className="text-lg font-semibold">{plant.plantName}</h4>
              <p className="text-green-600 font-semibold">${plant.price}</p>
              <p className="text-yellow-500">
                {Array(Math.floor(plant.rating)).fill("★").join("")}
                {plant.rating % 1 ? "☆" : ""}
              </p>
              <button className="btn btn-primary mt-3">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

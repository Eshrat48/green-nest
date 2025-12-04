import plants from '../data/plants'
import { useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react'

export default function Plants() {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterCareLevel, setFilterCareLevel] = useState('all')

  const categories = [...new Set(plants.map(plant => plant.category))]
  const careLevels = [...new Set(plants.map(plant => plant.careLevel))]

  const filteredAndSortedPlants = useMemo(() => {
    let filtered = plants.filter(plant => {
      if (filterCategory !== 'all' && plant.category !== filterCategory) return false
      if (filterCareLevel !== 'all' && plant.careLevel !== filterCareLevel) return false
      return true
    })

    filtered.sort((a, b) => {
      let aValue, bValue
      switch (sortBy) {
        case 'name':
          aValue = a.plantName.toLowerCase()
          bValue = b.plantName.toLowerCase()
          break
        case 'price':
          aValue = a.price
          bValue = b.price
          break
        case 'rating':
          aValue = a.rating
          bValue = b.rating
          break
        default:
          return 0
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    return filtered
  }, [sortBy, sortOrder, filterCategory, filterCareLevel])

  return (
    <section className="bg-[#ddf0e4ff] py-10 px-2 md:px-0 min-h-[100vh]">
      <h2 className="text-2xl font-semibold text-[#16a34a] mb-10 text-center text-[40px]">
        All Indoor Plants
      </h2>

      {/* Filters and Sorting */}
      <div className="max-w-6xl mx-auto mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Care Level</label>
            <select
              value={filterCareLevel}
              onChange={(e) => setFilterCareLevel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Levels</option>
              {careLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-7 place-items-center">
          {filteredAndSortedPlants.map((plant) => (
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

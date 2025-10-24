// PlantDetails.jsx
import { useParams, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import plants from "../data/plants";
import { useAuth } from "../context/AuthProvider";

export default function PlantDetails() {
  const { id } = useParams();
  const plant = plants.find(p => String(p.plantId) === id);
  const { user } = useAuth();
  const location = useLocation();
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [success, setSuccess] = useState("");

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!plant) {
    return <div className="text-center text-red-500">Plant not found.</div>;
  }

  function handleConsult(e) {
    e.preventDefault();
    setSuccess("Consultation booked successfully!");
    setName(user?.displayName || "");
    setEmail(user?.email || "");
    setTimeout(() => setSuccess(""), 2500);
  }

  return (
    <section className="max-w-5xl mx-auto mt-10 mb-10 bg-white rounded-xl shadow p-6 grid md:grid-cols-2 gap-8">
      <div>
        <img src={plant.image} alt={plant.plantName} className="w-full h-[600px] object-cover rounded-lg" />
      </div>
      <div>
        <h2 className="text-[35px] font-bold mb-2 mt-10 text-gray-700">{plant.plantName}</h2>
        <div className="flex items-center gap-6 mb-2">
          <span className="flex items-center text-yellow-500 font-bold text-[20px]">{plant.rating} ★</span>
          <span className="text-[20px] text-orange-700">{plant.availableStock} in stock</span>
        </div>
        <div className="text-green-600 text-lg font-bold mb-1">${plant.price}</div>
        <div className="text-gray-700 mb-3">{plant.description}</div>
        <div className="bg-green-50 p-3 rounded mb-4 font-medium">
          <span className="text-green-700">Provider:</span> <span className="text-gray-600">{plant.providerName}</span>
        </div>
        <form onSubmit={handleConsult} className="space-y-3">
          <label className="block font-semibold mb-1 text-green-700 text-[20px]">Book a Consultation</label>
          <input
            className="block w-full px-3 py-2 border rounded mb-2"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            className="block w-full px-3 py-2 border rounded mb-2"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          {success && <div className="text-green-600">{success}</div>}
          <button className="bg-green-600 text-white px-5 py-2 rounded font-bold hover:bg-green-700 transition w-full" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}

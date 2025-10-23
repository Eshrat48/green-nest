import { FaUserGraduate } from "react-icons/fa";
import expert1 from '../assets/experts/expert1.jpg';
import expert2 from '../assets/experts/expert2.jpg';
import expert3 from '../assets/experts/expert3.jpg';
import expert4 from '../assets/experts/expert4.jpg';

const experts = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialization: "Tropical Plants Specialist",
    image: expert1, // Update with your local image imports if needed
    experience: "10+ years",
  },
  {
    id: 2,
    name: "Michael Chen",
    specialization: "Succulent & Cacti Expert",
    image: expert2,
    experience: "8+ years",
  },
  {
    id: 3,
    name: "Emma Williams",
    specialization: "Indoor Air Quality & Plants",
    image: expert3,
    experience: "12+ years",
  },
  {
    id: 4,
    name: "David Martinez",
    specialization: "Plant Disease & Pest Control",
    image: expert4,
    experience: "15+ years",
  },
];

export default function GreenExperts() {
  return (
    <section className="py-16 px-2 bg-[#ddf0e4ff]">
      <h3 className="text-green-700 text-[65px] font-bold mb-1 text-center">
        Meet Our Green Experts
      </h3>
      <p className="text-gray-600 text-center text-[20px] mb-10 max-w-2xl mx-auto leading-relaxed">
        Our certified plant specialists are here to help you nurture a thriving indoor garden
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="rounded-xl shadow bg-white flex flex-col items-start px-0 pb-5 pt-0 overflow-hidden hover:shadow-md transition"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="px-6 pt-5 w-full">
              <h4 className="font-medium text-gray-900 mb-1">{expert.name}</h4>
              <div className="mb-2">
                <span className="text-green-600 text-sm font-medium cursor-pointer">
                  {expert.specialization}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <FaUserGraduate className="text-green-400" />
                {expert.experience && <span>{expert.experience}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

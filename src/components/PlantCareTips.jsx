import { FiDroplet, FiSun, FiActivity } from "react-icons/fi";

const tips = [
  {
    title: "Watering",
    desc: "Most indoor plants prefer consistent moisture. Check soil before watering - if the top inch is dry, it's time to water.",
    icon: <FiDroplet size={50} className="text-blue-400 bg-blue-50 rounded-full p-2" />,
    titleClass: "text-blue-500"
  },
  {
    title: "Sunlight",
    desc: "Place plants in bright, indirect light. Rotate them weekly for even growth and avoid harsh direct sunlight.",
    icon: <FiSun size={50} className="text-yellow-500 bg-yellow-50 rounded-full p-2" />,
    titleClass: "text-yellow-500"
  },
  {
    title: "Fertilizing",
    desc: "Feed your plants during growing season (spring/summer) with balanced fertilizer every 2-4 weeks for optimal health.",
    icon: <FiActivity size={50} className="text-purple-500 bg-purple-50 rounded-full p-2" />,
    titleClass: "text-purple-500"
  }
];

export default function PlantCareTips() {
  return (
    <section className="py-14 px-2 bg-gray-50">
      <h3 className="text-green-700 text-[65px] font-bold mb-2 text-center">Essential Plant Care Tips</h3>
      <p className="text-gray-600 text-[20px] text-center mb-12 max-w-2xl mx-auto leading-relaxed">
        Master the basics of indoor plant care with our expert guidance
      </p>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm p-8 text-left flex flex-col items-start hover:shadow-md transition"
          >
            <div className="mb-4">{tip.icon}</div>
            <h4 className={`text-lg font-semibold mb-2 ${tip.titleClass}`}>{tip.title}</h4>
            <p className="text-medium text-gray-600">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

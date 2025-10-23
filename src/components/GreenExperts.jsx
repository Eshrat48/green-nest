// GreenExperts.jsx
const experts = [
  { id: 1, name: "Alice Green", specialization: "Succulents & Cacti", image: "https://i.postimg.cc/4xWLqzBc/expert1.jpg" },
  { id: 2, name: "Bob Fern", specialization: "Tropical Plants", image: "https://i.postimg.cc/Hx5Qk7qt/expert2.jpg" },
  { id: 3, name: "Cindy Leaf", specialization: "Air Purifying Plants", image: "https://i.postimg.cc/qRVFZ6J2/expert3.jpg" },
  { id: 4, name: "David Roots", specialization: "Orchids & Ferns", image: "https://i.postimg.cc/dt7PvFKh/expert4.jpg" },
];

export default function GreenExperts() {
  return (
    <section className="my-20 max-w-7xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-10">Meet Our Green Experts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {experts.map((expert) => (
          <div key={expert.id} className="shadow-md rounded-lg p-4 bg-white">
            <img src={expert.image} alt={expert.name} className="w-36 h-36 mx-auto rounded-full object-cover" />
            <h4 className="pt-4 text-xl font-semibold">{expert.name}</h4>
            <p className="text-green-600">{expert.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// EcoDecor.jsx
const ideas = [
  { id: 1, title: "Living Wall Art", image: "https://i.postimg.cc/VNpvZCwP/living-wall.jpg" },
  { id: 2, title: "Tabletop Zen Garden", image: "https://i.postimg.cc/VkCpgDtr/tabletop-zen.jpg" },
  { id: 3, title: "Hanging Succulent Garden", image: "https://i.postimg.cc/Hsbpg7Xq/hanging-succulents.jpg" },
];

export default function EcoDecor() {
  return (
    <section className="my-20 max-w-7xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-10">Eco Decor Ideas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="overflow-hidden rounded-lg shadow-md bg-white">
            <img src={idea.image} alt={idea.title} className="w-full h-64 object-cover transition-transform hover:scale-105" />
            <h4 className="text-lg font-semibold p-4">{idea.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

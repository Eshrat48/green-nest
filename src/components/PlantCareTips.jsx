// PlantCareTips.jsx
const tips = [
  { title: "Watering", desc: "Water plants when soil feels dry to the touch." },
  { title: "Sunlight", desc: "Provide indirect sunlight for most indoor plants." },
  { title: "Fertilizing", desc: "Feed monthly during growing season with balanced fertilizer." },
];

export default function PlantCareTips() {
  return (
    <section className="my-20 max-w-5xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-10">Plant Care Tips</h3>
      <div className="grid gap-8 md:grid-cols-3">
        {tips.map((tip, idx) => (
          <div key={idx} className="border rounded-lg p-6 shadow-sm bg-white">
            <h4 className="text-xl font-semibold mb-3">{tip.title}</h4>
            <p>{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

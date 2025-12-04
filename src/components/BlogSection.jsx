import snakePlant from "../assets/plants/snake-plant.jpg";
import peaceLily from "../assets/plants/peace-lily.jpg";
import monstera from "../assets/plants/monstera.jpg";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "10 Easy Care Indoor Plants for Beginners",
      excerpt: "Discover the perfect plants to start your indoor gardening journey with these low-maintenance options.",
      image: snakePlant,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "The Benefits of Indoor Plants for Your Health",
      excerpt: "Learn how indoor plants can improve air quality, reduce stress, and boost your overall well-being.",
      image: peaceLily,
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Seasonal Plant Care Tips",
      excerpt: "Adjust your plant care routine according to the changing seasons for optimal growth.",
      image: monstera,
      date: "2024-01-05"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">Plant Care Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <button className="text-green-600 hover:text-green-800 font-medium">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

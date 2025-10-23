// EcoDecor.jsx
import livingWall from '../assets/living-wall.jpg';

const featured = {
  title: "Living Wall Art",
  description:
    "This week's featured decor! Living wall art transforms your space into a vertical garden paradise. Combine a variety of easy-care plants or succulents for natural art that cleans your air and makes any wall extraordinary.",
  image: livingWall,
  label: "Featured!",
  price: 120,
  rating: 4.9
};

export default function EcoDecor() {
  return (
    <section className="py-16 w-full bg-green-700 bg-gradient-to-br from-green-600 to-green-700">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-12 px-2">
        {/* Left - text block */}
        <div className="flex-1 flex flex-col justify-center text-left text-white">
          <span className="flex items-center gap-2 mb-3 text-yellow-300 font-semibold text-sm">
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 17.25l-6.5 3.42L7 14.28 2.5 9.93l6.92-.55L12 3l2.58 6.38 6.92.55-4.5 4.35 1.5 6.39L12 17.25z"/></svg>
            ECO DECOR OF THE WEEK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{featured.title}</h2>
          <div className="text-green-100 text-base mb-6">{featured.description}</div>
          <div className="flex items-center text-sm gap-6 mb-6">
            <span className="flex items-center gap-1">
              <span className="text-yellow-300 text-base">★</span> {featured.rating} Rating
            </span>
            <span className="border-l border-green-300 h-5"></span>
            <span className="text-green-200">Special Price: <span className="text-white font-semibold">${featured.price}</span></span>
          </div>
          <button className="bg-white text-green-700 font-semibold px-5 py-2 rounded shadow hover:bg-green-100 transition">
            View Details
          </button>
        </div>
        {/* Right - image with badge */}
        <div className="flex-1 flex items-center justify-center relative">
          <img
            src={featured.image}
            alt={featured.title}
            className="shadow-xl rounded-xl w-full max-w-md h-[400px] object-cover"
          />
          <span className="absolute top-4 right-8 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-semibold shadow">
            {featured.label}
          </span>
        </div>
      </div>
    </section>
  );
}

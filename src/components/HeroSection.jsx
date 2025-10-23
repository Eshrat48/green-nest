// HeroSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import slide1 from "../assets/slogan/slide1.jpg";
import slide2 from "../assets/slogan/slide2.jpg";
import slide3 from "../assets/slogan/slide3.jpg";

const slides = [
  {
    image: slide1,
    slogan: "Transform Your Space with Green",
    description: "Discover the perfect indoor plants for your home",
  },
  {
    image: slide2,
    slogan: "Nature's Beauty at Your Home",
    description: "Freshen your living space with our lush collection",
  },
  {
    image: slide3,
    slogan: "Care for Plants, Care for Yourself",
    description: "Easy-care greens for every lifestyle and interior",
  },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="h-[500px] md:h-[580px] rounded-b-lg overflow-hidden relative"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            className="relative h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-6">
              <div className="space-y-3 text-center">
                <h2 className="text-white text-2xl md:text-3xl font-semibold">
                  {slide.slogan}
                </h2>
                <p className="text-white text-base md:text-lg">
                  {slide.description}
                </p>
              </div>
              <button
                onClick={() => navigate("/plants")}
                className="bg-[#16a34a] hover:bg-[#12853b] text-white text-lg rounded-lg px-8 py-3 transition font-normal"
              >
                Explore Plants
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

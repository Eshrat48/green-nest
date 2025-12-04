// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import TopRatedPlants from '../components/TopRatedPlants';
import PlantCareTips from '../components/PlantCareTips';
import EcoDecor from '../components/EcoDecor';
import GreenExperts from '../components/GreenExperts';
import PlantOfTheWeek from '../components/PlantOfTheWeek';
import BlogSection from '../components/BlogSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TopRatedPlants />
      <PlantCareTips />
      <EcoDecor />
      <GreenExperts />
      <PlantOfTheWeek />
      <BlogSection />
    </main>
  );
}

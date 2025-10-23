// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import TopRatedPlants from '../components/TopRatedPlants';
import PlantCareTips from '../components/PlantCareTips';
import GreenExperts from '../components/GreenExperts';
import EcoDecor from '../components/EcoDecor';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TopRatedPlants />
      <PlantCareTips />
      <GreenExperts />
      <EcoDecor />
    </main>
  );
}

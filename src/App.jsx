import Hero from './components/Hero';
import FlavorCarousel from './components/FlavorCarousel';
import TechFeatures from './components/TechFeatures';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#030a06] font-['Inter',_'Geist',_'Manrope',sans-serif]">
      <Hero />
      <FlavorCarousel />
      <TechFeatures />
      <FooterCTA />
    </div>
  );
}

export default App;

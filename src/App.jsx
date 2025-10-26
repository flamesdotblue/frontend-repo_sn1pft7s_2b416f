import Hero from './components/Hero';
import FlavorCarousel from './components/FlavorCarousel';
import FooterCTA from './components/FooterCTA';
import CanOverlay from './components/CanOverlay';

function App() {
  return (
    <div className="min-h-screen bg-[#030a06] font-['Inter',_'Geist',_'Manrope',sans-serif]">
      {/* Global rolling can overlay */}
      <CanOverlay />

      <Hero />
      <FlavorCarousel />
      <FooterCTA />
    </div>
  );
}

export default App;

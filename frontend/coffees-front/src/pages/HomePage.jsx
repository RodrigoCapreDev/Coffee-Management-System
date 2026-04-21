import HeroSection from "../components/HeroSection";
import FeaturedCoffees from "../components/FeaturedCoffees";
import {useCoffees} from "../hooks/useCoffee";

const HomePage = () => {
  const { coffes, loading } = useCoffees();

  return (
    <main>
      <HeroSection />
      <FeaturedCoffees />
    </main>
  );
};

export default HomePage;
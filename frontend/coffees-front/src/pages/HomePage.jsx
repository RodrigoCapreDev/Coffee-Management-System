import HeroSection from "../components/HeroSection";
import FeaturedCoffees from "../components/FeaturedCoffees";
import {useCoffees} from "../hooks/useCoffee";

const HomePage = () => {
  const { coffees, loading } = useCoffees();

  const scrollToCatalog = () => {
    document.getElementById("featured-coffees")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <HeroSection onVerCatalogo={scrollToCatalog} />
      <FeaturedCoffees coffees={coffees} loading={loading} />
    </main>
  );
};

export default HomePage;
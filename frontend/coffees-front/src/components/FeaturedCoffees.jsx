import { motion } from "framer-motion";
import CoffeeCard from "./CoffeeCard";
import CoffeeFormModal from "./CoffeeFormModal";
import "./featuredCoffees.css";

function FeaturedCoffees({ coffees, loading, onEditCoffee, onDeleteCoffee }) {
  return (
    <section className="featured" id="featured-coffees">
      <div className="featured-header">
        <p className="featured-eyebrow">SELECCIÓN</p>
        <h2 className="featured-title">NUESTROS CAFÉS</h2>
      </div>
      {loading ? (
        <p className="featured-loading">CARGANDO...</p>
      ) : (
        <div className="featured-grid">
          {coffees.map((coffee, i) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CoffeeCard coffee={coffee} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default FeaturedCoffees;

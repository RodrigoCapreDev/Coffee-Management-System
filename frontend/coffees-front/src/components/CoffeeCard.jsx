import coffeePackageImage from "../assets/coffee_package.png";
import "./coffeeCard.css";

function CoffeeCard({ coffee, onEdit, onDelete }) {
  return (
    <div className="coffee-card">
      <div className="coffee-card-image-wrapper">
        <img
          src={coffeePackageImage}
          alt={coffee.name}
          className="coffee-card-image"
        />
        <div className="coffee-card-overlay">
          <p className="coffee-card-description">{coffee.description}</p>
          {coffee.flavor_notes && (
            <p className="coffee-card-notes">{coffee.flavor_notes}</p>
          )}
          <div className="roast-bar">
            <div className="roast-bar-track">
              <div
                className={`roast-bar-indicator roast--${coffee.roast_level?.toLowerCase()}`}
              ></div>
            </div>
            <div className="roast-bar-labels">
              <span>CLARO</span>
              <span>MEDIO</span>
              <span>OSCURO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="coffee-card-footer">
        <div className="coffee-name">
          <h3>{coffee.name}</h3>
          <span className="coffee-card-origin">{coffee.origin || "N/A"}</span>
        </div>
        <span className="coffee-price">${coffee.price}</span>
      </div>
    </div>
  );
}
export default CoffeeCard;

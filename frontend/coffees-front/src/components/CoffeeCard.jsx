import coffeePackageImage from "../assets/coffee_package.png";
import globeIcon from "../assets/globeIcon.png";
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
      </div>

      <div className="coffee-card-footer">
        <div className="coffee-name">
          <span>{coffee.name}</span>
        </div>
        <div className="coffee-card-specs">
          {coffee.origin && (
            <div className="coffee-card-origin">
              <img src={globeIcon} alt="" className="origin-icon" />
              <span>{coffee.origin}</span>
            </div>
          )}
          {coffee.flavor_notes && (
            <p className="coffee-card-notes">{coffee.flavor_notes}</p>
          )}
          {/*<p className="coffee-card-description">{coffee.description}</p>*/}
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
          <span className="coffee-price">${coffee.price}</span>
        </div>
        <div className="coffee-card-actions">
          <button className="coffee-card-btn" disabled title="Próximamente">
            VER MÁS
          </button>
        </div>
      </div>
    </div>
  );
}
export default CoffeeCard;

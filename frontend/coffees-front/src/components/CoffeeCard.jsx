import coffeePackageImage from "../assets/coffee_package.png";

function CoffeeCard({ coffee, onEdit, onDelete }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="coffee-card">
        {/*
        <header className="card-header bg-white border-0 pt-4 d-flex justify-content-between align-items-center">
          <h4 className="card-title h5 fw-bold mb-0 text-dark">
            HEADER
          </h4>
        </header>
        */}
        <div className="flip-coffee-card">
          <div className="flip-coffee-card-inner">
            {/* Cara frontal de la carta */}

            <div className="flip-coffee-card-front border-0 h-100">
              {/*
              <header className="card-header bg-white border-0 pt-4 d-flex justify-content-center align-items-center">
                <h3 className="card-title h5 fw-bold mb-0 text-dark">
                  {coffee.name}
                </h3>
                
              <div className="dropdown">
                <button
                  className="btn btn-link text-muted p-0"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => onEdit(coffee)}
                    >
                      <i className="bi bi-pencil me-2"></i>Editar
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={() => onDelete(coffee.id)}
                    >
                      <i className="bi bi-trash me-2"></i>Eliminar
                    </button>
                  </li>
                </ul>
              </div>
              </header> */}
              <main className="card-body py-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    src={coffeePackageImage}
                    alt="Paquete de cafe"
                    className="img-fluid"
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </div>
              </main>
            </div>

            {/* Cara trasera de la carta (opcional para detalles adicionales) */}
            <div className="flip-coffee-card-back border-0 h-100">
              <main className="card-body py-2">
                <p className="text small mb-2">{coffee.description}</p>
                {/*
                <div className="d-flex flex-wrap gap-2 mb-2">
                  <span className="badge rounded-pill bg-light text-dark border fw-medium">
                    <i className="bi bi-geo-alt me-1 text-muted">
                      {coffee.origin || "N/A"}
                    </i>
                  </span>

                  
                  <span className="badge rounded-pill bg-light text-dark border fw-medium">
                    <i className="bi bi-fire me-1 text-warning"></i>
                    {coffee.roast_level || "N/A"}
                  </span>
                </div>
                {coffee.flavor_notes && (
                  <p className="small-text text-muted mb-0 italic">
                    <i className="bi bi-info-circle me-1"></i>
                    <span className="fw-semibold">Notas: </span>
                    {coffee.flavor_notes}
                  </p>
                )}*/}
              </main>
            </div>
          </div>
        </div>
        <div className="coffee-card-footer p-2">
          <div className="d-flex justify-content-end mb-2">
            <h3 className="coffee-name h5 fw-bold mb-0">{coffee.name}</h3>
            <div className="d-flex gap-2 ms-auto">
              <button
                className="btn btn-sm btn-light border"
                onClick={() => onEdit(coffee)}
                title="Editar"
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button
                className="btn btn-sm btn-light border text-danger"
                onClick={() => onDelete(coffee.id)}
                title="Eliminar"
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <span className="text-success fs-4 fw-bold">${coffee.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoffeeCard;

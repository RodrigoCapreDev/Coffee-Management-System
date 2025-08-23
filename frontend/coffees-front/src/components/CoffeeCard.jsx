
function CoffeeCard({ coffee, onEdit, onDelete }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            <i className="bi bi-cup-hot me-2"></i>
            {coffee.name}
          </h5>
          <div className="dropdown">
            <button
              className="btn btn-sm btn-outline-light"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-three-dots-vertical"></i>
            </button>
            <ul className="dropdown-menu">
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
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text text-muted mb-3">{coffee.description}</p>
          <div className="row g-2 mb-3">
            <div className="col-6">
              <span className="badge bg-secondary me-1">Origen</span>
              <small className="text-muted d-block">{coffee.origin || "N/A"}</small>
            </div>
            <div className="col-6">
              <span className="badge bg-secondary me-1">Tostado</span>
              <small className="text-muted d-block">{coffee.roast_level || "N/A"}</small>
            </div>
          </div>
          {coffee.flavor_notes && (
            <div className="mb-3">
              <span className="badge bg-info me-1">Notas de sabor</span>
              <small className="text-muted d-block">{coffee.flavor_notes}</small>
            </div>
          )}
          <div className="mt-auto">
            <h4 className="text-success mb-0">${coffee.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoffeeCard;

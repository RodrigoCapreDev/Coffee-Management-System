
function CoffeeList({ coffees, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Origen</th>
            <th>Tostado</th>
            <th>Notas de Sabor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(coffees) && coffees.length > 0 ? (
            coffees.map((coffee) => (
              <tr key={coffee.id}>
                <td>{coffee.id}</td>
                <td>{coffee.name}</td>
                <td>{coffee.description}</td>
                <td className="text-success fw-bold">${coffee.price}</td>
                <td>{coffee.origin || "N/A"}</td>
                <td>{coffee.roast_level || "N/A"}</td>
                <td>
                  <small className="text-muted">{coffee.flavor_notes || "N/A"}</small>
                </td>
                <td>
                  <div className="btn-group" role="group">
                    <button className="btn btn-sm btn-outline-primary" onClick={() => onEdit(coffee)}>
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(coffee.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center text-muted">No hay cafés disponibles.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default CoffeeList;

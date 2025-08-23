import { useEffect, useState } from "react";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import {
  getCoffees,
  getCoffee,
  createCoffee,
  updateCoffee,
  deleteCoffee,
} from "../api/coffeeApi";
import CoffeeFormModal from "../components/CoffeeFormModal";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("cards"); // 'cards' o 'list'
  const [showCoffeeFormModal, setShowCoffeeFormModal] = useState(false);
  const [editingCoffee, setEditingCoffee] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    roast_level: "",
    flavor_notes: "",
    price: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [coffeeToDelete, setCoffeeToDelete] = useState(null);

  useEffect(() => {
    fetchCoffees();
  }, []);

  const fetchCoffees = () => {
    setLoading(true);
    getCoffees()
      .then((res) => {
        setCoffees(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  };

  const handleSubmitCoffeeForm = (e) => {
    e.preventDefault();
    if (editingCoffee) {
      updateCoffee(editingCoffee.id, formData)
        .then(() => {
          fetchCoffees();
          handleCloseCoffeeFormModal();
        })
        .catch((e) => console.error(e));
    } else {
      createCoffee(formData)
        .then(() => {
          fetchCoffees();
          handleCloseCoffeeFormModal();
        })
        .catch((e) => console.error(e));
    }
  };

  // Eliminar café (con confirmación modal)
  const handleDelete = (id) => {
    const coffee = coffees.find((c) => c.id === id);
    setCoffeeToDelete(coffee);
    setShowDeleteModal(true);
  };

  // Confirmar eliminación
  const handleConfirmDelete = () => {
    if (!coffeeToDelete) return;
    deleteCoffee(coffeeToDelete.id)
      .then(() => {
        fetchCoffees();
        setShowDeleteModal(false);
        setCoffeeToDelete(null);
      })
      .catch((e) => {
        console.error(e);
        setShowDeleteModal(false);
        setCoffeeToDelete(null);
      });
  };

  // Cancelar eliminación
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setCoffeeToDelete(null);
  };

  // Abrir modal para crear
  const handleCreate = () => {
    setEditingCoffee(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      origin: "",
      roast_level: "",
      flavor_notes: "",
    });
    setShowCoffeeFormModal(true);
  };

  // Abrir modal para editar
  const handleEdit = (coffee) => {
    setEditingCoffee(coffee);
    setFormData({
      name: coffee.name,
      description: coffee.description,
      price: coffee.price,
      origin: coffee.origin || "",
      roast_level: coffee.roast_level || "",
      flavor_notes: coffee.flavor_notes || "",
    });
    setShowCoffeeFormModal(true);
  };

  // Cerrar modal
  const handleCloseCoffeeFormModal = () => {
    setShowCoffeeFormModal(false);
    setEditingCoffee(null);
  };

  // Vista de cartas
  const CardView = () => (
    <div className="row g-4">
      {coffees.map((coffee) => (
        <div key={coffee.id} className="col-md-6 col-lg-4">
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
                      onClick={() => handleEdit(coffee)}
                    >
                      <i className="bi bi-pencil me-2"></i>Editar
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={() => handleDelete(coffee.id)}
                    >
                      <i className="bi bi-trash me-2"></i>Eliminar
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body d-flex flex-column">
              <p className="card-text text-muted mb-3">{coffee.description}</p>

              <div className="mb-3">
                <div className="row g-2">
                  <div className="col-6">
                    <span className="badge bg-secondary me-1">Origen</span>
                    <small className="text-muted d-block">
                      {coffee.origin || "N/A"}
                    </small>
                  </div>
                  <div className="col-6">
                    <span className="badge bg-secondary me-1">Tostado</span>
                    <small className="text-muted d-block">
                      {coffee.roast_level || "N/A"}
                    </small>
                  </div>
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
      ))}
    </div>
  );

  // Vista de lista
  const ListView = () => (
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
          {coffees.map((coffee) => (
            <tr key={coffee.id}>
              <td>{coffee.id}</td>
              <td>{coffee.name}</td>
              <td>{coffee.description}</td>
              <td className="text-success fw-bold">${coffee.price}</td>
              <td>{coffee.origin || "N/A"}</td>
              <td>{coffee.roast_level || "N/A"}</td>
              <td>
                <small className="text-muted">
                  {coffee.flavor_notes || "N/A"}
                </small>
              </td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleEdit(coffee)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(coffee.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h1 className="display-4 text-primary mb-2">☕ Gestión de Cafés</h1>
            <p className="lead text-muted">Panel de administración</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <button className="btn btn-success me-3" onClick={handleCreate}>
              <i className="bi bi-plus-circle me-2"></i>
              Nuevo Café
            </button>
            <div className="btn-group" role="group">
              <button
                className={`btn ${
                  viewMode === "cards" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setViewMode("cards")}
              >
                <i className="bi bi-grid-3x3-gap"></i>
              </button>
              <button
                className={`btn ${
                  viewMode === "list" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setViewMode("list")}
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </div>

        {coffees.length === 0 ? (
          <div className="row">
            <div className="col-12 text-center">
              <div className="alert alert-info" role="alert">
                <h4 className="alert-heading">No hay cafés disponibles</h4>
                <p>Agrega tu primer café usando el botón "Nuevo Café"</p>
                <button className="btn btn-primary" onClick={handleCreate}>
                  <i className="bi bi-plus-circle me-2"></i>
                  Crear Primer Café
                </button>
              </div>
            </div>
          </div>
        ) : viewMode === "cards" ? (
          <CardView />
        ) : (
          <ListView />
        )}

        <CoffeeFormModal
          showModal={showCoffeeFormModal}
          handleCloseModal={handleCloseCoffeeFormModal}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmitCoffeeForm}
          editingCoffee={editingCoffee}
        />

        <DeleteConfirmModal
          show={showDeleteModal}
          onConfirm={handleConfirmDelete}
          onCancel={cancelDelete}
          coffeeToDelete={coffeeToDelete}
        />
      </div>
    </div>
  );
}

export default App;

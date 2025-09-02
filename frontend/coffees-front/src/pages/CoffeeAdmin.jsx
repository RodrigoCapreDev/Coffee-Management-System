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
import CoffeeList from "../components/CoffeeList";
import CoffeeCard from "../components/CoffeeCard";
import Header from "../components/Header";

function CoffeesAdminPage() {
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

  const handleDelete = (id) => {
    const coffee = coffees.find((c) => c.id === id);
    setCoffeeToDelete(coffee);
    setShowDeleteModal(true);
  };

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

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setCoffeeToDelete(null);
  };

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

  const handleCloseCoffeeFormModal = () => {
    setShowCoffeeFormModal(false);
    setEditingCoffee(null);
  };

  // Vista de cartas
  const CardView = () => (
    <div className="row g-4">
      {Array.isArray(coffees) && coffees.length > 0 ? (
        coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      ) : (
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
      )}
    </div>
  );

  // Vista de lista
  const ListView = () => (
    <CoffeeList coffees={coffees} onEdit={handleEdit} onDelete={handleDelete} />
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
        <Header
          handleCreate={handleCreate}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {viewMode === "cards" ? <CardView /> : <ListView />}

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

export default CoffeesAdminPage;

import { useEffect, useState } from "react";
import { useCoffees } from "../hooks/useCoffee";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import CoffeeFormModal from "../components/CoffeeFormModal";
import CoffeeList from "../components/CoffeeList";
import CoffeeCard from "../components/CoffeeCard";
import Header from "../components/Header";

function CoffeesAdminPage() {
  const { coffees, loading, error, addCoffee, editCoffee, removeCoffee } = useCoffees();
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

  const handleSubmitCoffeeForm = async (e) => {
    e.preventDefault();
    try {
      if (editingCoffee) {
        await editCoffee(editingCoffee.id, formData);
      } else {
        await addCoffee(formData);
      }
      handleCloseCoffeeFormModal();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Ocurrió un error al guardar el café. Por favor, intenta nuevamente.",
      );
    }
  };

  const handleDelete = (id) => {
    const coffee = coffees.find((c) => c.id === id);
    setCoffeeToDelete(coffee);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!coffeeToDelete) return;
    try {
      await removeCoffee(coffeeToDelete.id);
      setShowDeleteModal(false);
      setCoffeeToDelete(null);
    } catch (error) {
      console.error("Error al eliminar el café:", error);
      alert(
        "Ocurrió un error al eliminar el café. Por favor, intenta nuevamente.",
      );
    }
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

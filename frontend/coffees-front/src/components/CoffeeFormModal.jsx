function CoffeeFormModal({
  showModal,
  handleCloseModal,
  formData,
  setFormData,
  handleSubmit,
  editingCoffee,
}) {
  return (
    <div
      className={`modal d-block ${showModal ? "show d-block" : "d-none"}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {editingCoffee ? "Editar Café" : "Nuevo Café"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Precio *
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="origin" className="form-label">
                  Origen
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="origin"
                  value={formData.origin}
                  onChange={(e) =>
                    setFormData({ ...formData, origin: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="roast_level" className="form-label">
                  Nivel de tostado
                </label>
                <select
                  className="form-select"
                  id="roast_level"
                  value={formData.roast_level}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      roast_level: e.target.value,
                    })
                  }
                >
                  <option value="">Seleccionar...</option>
                  <option value="Claro">Claro</option>
                  <option value="Medio">Medio</option>
                  <option value="Oscuro">Oscuro</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="flavor_notes" className="form-label">
                  Notas de Sabor
                </label>
                <textarea
                  className="form-control"
                  id="flavor_notes"
                  rows="3"
                  placeholder="Ej: Notas cítricas, chocolate, caramelo..."
                  value={formData.flavor_notes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      flavor_notes: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                {editingCoffee ? "Actualizar" : "Crear"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CoffeeFormModal;

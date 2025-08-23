function DeleteConfirmModal({ show, onConfirm, onCancel, coffeeToDelete }) {
  return (
    <div
      className={`modal d-block ${show ? "show d-block" : "d-none"}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">
              <i className="bi bi-trash me-2"></i>Confirmar eliminación
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              ¿Estás seguro de que quieres eliminar el café{" "}
              <strong>{coffeeToDelete?.name}</strong>?
            </p>
            <p className="text-muted">Esta acción no se puede deshacer.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirm}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;

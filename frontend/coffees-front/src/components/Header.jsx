function Header({ handleCreate, viewMode, setViewMode }) {
  return (
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
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import "./adminSidebar.css";

function AdminSidebar() {
  const links = [
    {
      to: "/admin/inventario",
      label: "Inventario",
      icon: "bi-box-seam",
      active: true,
    },
    {
      to: "/admin/pedidos",
      label: "Pedidos",
      icon: "bi-receipt",
      active: false,
    },
    {
      to: "/admin/usuarios",
      label: "Usuarios",
      icon: "bi-people",
      active: false,
    },
    {
      to: "/admin/configuracion",
      label: "Configuración",
      icon: "bi-gear",
      active: false,
    },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand">
        <h2 className="admin-sidebar-title">LOGO</h2>
      </div>
      <nav className="admin-nav">
        {/*<h2>Admin Panel</h2>*/}
        <ul className="sidebar-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "sidebar-link--active" : ""} ${!link.active ? "sidebar-link--disabled" : ""}`
                }
                onClick={(e) => !link.active && e.preventDefault()}
              >
                <i className={`bi ${link.icon}`}></i>
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;

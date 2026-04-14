import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import "./adminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
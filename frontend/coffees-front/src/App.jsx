import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import AdminInventory from "./pages/AdminInventory.jsx";
import CoffeeAdmin from "./pages/CoffeeAdmin.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CoffeeAdmin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Navigate to="/admin/inventario" />} />
          <Route path="/admin/inventario" element={<AdminInventory />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import CoffeeAdmin from "./pages/CoffeeAdmin.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CoffeeAdmin />} />
        <Route path="/admin" element={<CoffeeAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;

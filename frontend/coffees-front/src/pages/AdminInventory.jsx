import { useEffect, useState, useMemo } from "react";
import { useCoffees } from "../hooks/useCoffee";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import CoffeeFormModal from "../components/CoffeeFormModal";
import PageHeader from "../components/PageHeader";
import "./adminInventory.css";

function AdminInventory() {
  const { coffees, loading, error, addCoffee, editCoffee, removeCoffee } =
    useCoffees();
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
  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      accessorKey: "name",
      header: "NOMBRE",
    },
    {
      accessorKey: "origin",
      header: "ORIGEN",
    },
    {
      accessorKey: "roast_level",
      header: "TOSTADO",
    },
    {
      accessorKey: "price",
      header: "PRECIO",
      cell: ({ getValue }) => `$${getValue()}`,
    },
    {
      id: "acciones",
      header: "",
      cell: ({ row }) => (
        <div className="table-actions">
          <button onClick={() => onEdit(row.original)}>
            <i className="bi bi-pencil"></i>
          </button>
          <button onClick={() => onDelete(row.original.id)}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: coffees ?? [],
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

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

  const onDelete = (id) => {
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

  const onCreateCoffee = () => {
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

  const onEdit = (coffee) => {
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
    <main className="admin-inventory">
      <PageHeader
        title="Gestión de Inventario"
        subtitle="3 productos"
        actions={
          <button className="btn-header" onClick={onCreateCoffee}>
            + NUEVO CAFÉ
          </button>
        }
      />

      <table className="inventory-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={header.column.getCanSort() ? "sortable" : ""}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {header.column.getIsSorted() === "asc" && " ↑"}
                  {header.column.getIsSorted() === "desc" && " ↓"}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

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
    </main>
  );
}

export default AdminInventory;

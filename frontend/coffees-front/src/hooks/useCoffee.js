import { useState, useEffect } from "react";
import { createCoffee, getCoffees, updateCoffee, deleteCoffee } from "../api/coffeeApi";

export const useCoffees = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoffees = async () => {
    try {
      const res = await getCoffees();
      setCoffees(res.data.results || res.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoffees();
  }, []);

  const addCoffee = async (data) => {
    await createCoffee(data);
    await fetchCoffees();
  };

  const editCoffee = async (id, data) => {
    await updateCoffee(id, data);
    await fetchCoffees();
  };

  const removeCoffee = async (id) => {
    await deleteCoffee(id);
    await fetchCoffees();
  };

  return { coffees, loading, error, addCoffee, editCoffee, removeCoffee };
};

import axios from 'axios';

// Para levantar el frontend SIN Docker, cambia la URL por la del backend local, por ejemplo:
// export const API_URL = 'http://localhost:8000/api/coffees/';
// Si usas Docker y Nginx, deja la ruta relativa:
export const API_URL = '/api/coffees/';

export const getCoffees = () => axios.get(API_URL);
export const getCoffee = (id) => axios.get(`${API_URL}${id}/`);
export const createCoffee = (data) => axios.post(API_URL, data);
export const updateCoffee = (id, data) => axios.put(`${API_URL}${id}/`, data);
export const deleteCoffee = (id) => axios.delete(`${API_URL}${id}/`);



import axios from 'axios';

const API_URL = '/api/coffees/';

export const getCoffees = () => axios.get(API_URL);
export const getCoffee = (id) => axios.get(`${API_URL}${id}/`);
export const createCoffee = (data) => axios.post(API_URL, data);
export const updateCoffee = (id, data) => axios.put(`${API_URL}${id}/`, data);
export const deleteCoffee = (id) => axios.delete(`${API_URL}${id}/`);

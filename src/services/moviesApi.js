import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/movies';

export const getMovies = () => axios.get(BASE_URL);

export const getMovieById = (id) => axios.get(`${BASE_URL}/${id}`);

export const createMovie = (payload) => axios.post(BASE_URL, payload);

export const updateMovie = (id, payload) => axios.put(`${BASE_URL}/${id}`, payload);

export const deleteMovie = (id) => axios.delete(`${BASE_URL}/${id}`);

import axios from 'axios';

const api = axios.create({
  baseURL: "https://unpkg.com/pokemons@1.1.0/pokemons.json",
});

export default api;
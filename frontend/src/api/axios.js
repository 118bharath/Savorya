import axios from 'axios';

const instance = axios.create({
  // This uses your VITE_API_URL from the .env file for production
  // and falls back to the Vite proxy for local development.
  baseURL: import.meta.env.VITE_API_URL || '/api'
});

export default instance;
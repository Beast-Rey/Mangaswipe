import axios from "axios";

const url = import.meta.env.VITE_BASE_URL
export default axios.create({
  baseURL: 'http://localhost:3001'
});
// Default base user to API Fetch
import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:3000",
});

export default API;

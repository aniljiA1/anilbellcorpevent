import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  try {
    const stored = localStorage.getItem("user");

    if (!stored || stored === "undefined") {
      return req;
    }

    const user = JSON.parse(stored);

    if (user?.token) {
      req.headers.Authorization = `Bearer ${user.token}`;
    }
  } catch (error) {
    console.error("Invalid localStorage user:", error);
    localStorage.removeItem("user");
  }

  return req;
});

export default API;

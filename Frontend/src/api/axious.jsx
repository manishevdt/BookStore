import axios from "axios";

const BASE_URL = "http://13.60.234.72:4001";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

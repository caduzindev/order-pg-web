import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.URL_BACK || 'http://localhost:4545/',
  headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning":"any"
  },
  withCredentials: true
})
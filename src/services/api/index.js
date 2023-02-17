import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.URL_BACK,
  headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": 'any'
  },
  withCredentials: false,
  mode: 'no-cors'
})
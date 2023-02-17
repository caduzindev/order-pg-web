import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://a9ea-2804-858-f23c-7600-802d-7e82-c7d3-8fbc.sa.ngrok.io',
  headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": 'any'
  },
  withCredentials: false,
  mode: 'no-cors'
})
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.URL_BACK,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false,
  mode: 'no-cors'
})
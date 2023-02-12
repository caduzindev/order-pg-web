import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:4545/',
  headers: {'Content-Type': 'application/json'}
})
import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.0.40.182:3333",
});

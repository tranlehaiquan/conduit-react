import axios from "axios";
import { BASE_URL } from "./index.js";

axios.defaults.baseURL = BASE_URL;

export function setHeaderAuthorization(token) {
  axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}

export default axios;

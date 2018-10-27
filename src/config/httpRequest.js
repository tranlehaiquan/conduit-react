import axios from "axios";

const BASE_URL = "https://conduit.productionready.io/api";

axios.defaults.baseURL = BASE_URL;

export function setHeaderAuthorization(token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export default axios;

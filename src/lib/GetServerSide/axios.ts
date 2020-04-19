import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BACK_END_URL,
});

export function setHeaderAuthorization(token: string): void {
  axios.defaults.headers.common['Authorization'] = token;
}

export default instance;

import axios from 'axios';

const instance = axios.create();

export function setHeaderAuthorization(token: string): void {
  instance.defaults.headers.Authorization = token;
}

export default instance;

import axios from './config/httpRequest';

export const requestTags = () => {
  return axios.get('/tags');
}

export const requestArticles = () => {
  return axios.get('/articles')
}

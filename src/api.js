import axios from './config/httpRequest';

export const requestTags = () => {
  return axios.get('/tags');
}

export const requestArticles = (params) => {
  return axios.get('/articles', { params });
}

export const requestFeedArticles = (params) => {
  return axios.get('/articles/feed', { params });
}

export const userLogin = (email, password) => {
  return axios.post('/users/login', {
    user: {
      email,
      password
    }
  })
}

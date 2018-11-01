import { requestTags, requestArticles } from '../../api';

export const setArticles = (articles) => ({
  type: 'SET_ARTICLES',
  payload: articles
});

export const setTags = (tags) => ({
  type: 'SET_TAGS',
  payload: tags
});

// Action creator return a function
// because it is async
// Must use react thunk or something else to handle

/**
 * 
 * @param {Object} params 
 */
export const fetchTags = () => {
  return async (dispatch) => {
    const { data } = await requestTags();

    dispatch(setTags(data.tags));
  }
}

export const fetchArticles = (params) => {
  return async (dispatch) => {
    const { data } = await requestArticles(params);

    dispatch(setArticles(data))
  }
}

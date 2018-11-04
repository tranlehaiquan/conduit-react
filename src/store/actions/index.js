import { requestTags, requestArticles, requestFeedArticles } from '../../api';

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

/**
 * fetch articles
 * @param {Object} params 
 * @param {Boolean} isFeed @default false
 * @return {Promise} 
 */
export const fetchArticles = (params, isFeed = false) => {
  return async (dispatch) => {
    const action = isFeed ? requestFeedArticles : requestArticles;
    const { data } = await action(params);

    dispatch(setArticles(data))
  }
}

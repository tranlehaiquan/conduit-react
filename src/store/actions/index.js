import axios from '../../config/httpRequest';

export const setArticles = (articles) => ({
  type: 'SET_ARTICLES',
  payload: articles
});

export const setTags = (tags) => ({
  type: 'SET_TAGS',
  payload: tags
});

export const setArticlesFilter = (filter) => ({
  type: 'SET_ARTICLES_FILTER',
  payload: filter
});

// Action creator return a function
// because it is async
// Must use react thunk or something else to handle
export const fetchTags = () => {
  return async (dispatch) => {
    const { data: {tags: tags} } = await axios.get('https://conduit.productionready.io/api/tags');

    dispatch(setTags(tags));
  }
}

export const ArticlesFilter = ({
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FEED: 'SHOW_FEED',
  SHOW_FAVORITED: 'SHOW_FAVORITED'
});

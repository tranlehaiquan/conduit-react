const defaultState = {
  articles: [],
  articlesCount: 0,
  tags: []
}

const home = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TAGS':
      return {
        ...state,
        tags: action.payload
      }
    case 'SET_ARTICLES':
      const { articles, articlesCount } = action.payload;
      return {
        ...state,
        articles,
        articlesCount
      }
    default:
      return state
  }
}

export default home

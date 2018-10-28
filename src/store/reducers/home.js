const defaultState = {
  articles: [],
  tags: []
}

const home = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TAGS':
      return {
        ...state,
        tags: action.payload
      }
    default:
      return state
  }
}

export default home

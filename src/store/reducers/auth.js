const defaultState = {
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload
    case 'CLEAN_USER':
      return {}
    default:
      return state;
  }
}

export default auth;

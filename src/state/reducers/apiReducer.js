function apiReducer(state = null, action) {
  switch (action.type) {
    case 'API_UPDATE_DATA': {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

export default apiReducer;

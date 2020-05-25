function rosterReducer(state = { data: null, error: false }, action) {
  switch (action.type) {
    case 'ROSTER_UPDATE_DATA': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'ROSTER_SET_ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default rosterReducer;

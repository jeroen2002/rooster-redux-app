function settingsReducer(state = { group: 'AO2A' }, action) {
  switch (action.type) {
    case 'SETTINGS_UPDATE_GROUP': {
      return {
        ...state,
        group: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default settingsReducer;

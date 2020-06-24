import getWeekStartAndEnd from '../../utils/getWeekStartAndEnd';

const API_URL_BASE = 'https://deltion-rooster-proxy-2.stormheg.now.sh/api/v1/roster';


export function setRosterError(errorState) {
  return {
    type: 'ROSTER_SET_ERROR',
    payload: errorState,
  };
}

export function setRosterData(group, start, end) {
  return async (dispatch) => {
    const apiUrl = `${API_URL_BASE}?group=${group}&start=${start}&end=${end}`;
    let data = null;

    try {
      const response = await fetch(apiUrl);
      data = await response.json();
    } catch (err) {
      dispatch(setRosterError(true));
      return;
    }

    dispatch(setRosterError(false));
    dispatch({
      type: 'ROSTER_UPDATE_DATA',
      payload: data.data,
    });
  };
}

export function setRosterDataToCurrentWeek(group) {
  // TODO: Skip to monday if current day is either saterday or sunday
  const [start, end] = getWeekStartAndEnd(new Date());
  return setRosterData(group, start, end);
}

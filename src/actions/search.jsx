// import axios from 'axios';
import api from '../api/api';

export const REQUEST_LOGS = 'REQUEST_LOG';
export const SUCCESS_FETCH_LOGS = 'SUCCESS_FETCH_LOGS';

export const requestLogs = () => {
  return {
    type: REQUEST_LOGS
  };
};

const receiveLogs = data => {
  return {
    type: SUCCESS_FETCH_LOGS,
    hits: data,
    receivedAt: Date.now()
  };
};

export const fetchLogs = () => {
  return dispatch => {
    dispatch(requestLogs());
    return api.get('search/all')
      .then(response => dispatch(receiveLogs(response.data)));
  };
};

// import axios from 'axios';
import api from '../api/api';

export const REQUEST_LOGS = 'REQUEST_LOG';
export const SUCCESS_FETCH_LOGS = 'SUCCESS_FETCH_LOGS';

export const REQUEST_LOG = 'REQUEST_LOG';
export const SUCCESS_FETCH_LOG = 'SUCCESS_FETCH_LOG';

export const GET_LOG_FROM_CACHE = 'GET_LOG_FROM_CACHE';

const requestLog = () => {
  return {
    type: REQUEST_LOG
  };
};

const requestLogs = () => {
  return {
    type: REQUEST_LOGS
  };
};

const receiveLog = data => {
  return {
    type: SUCCESS_FETCH_LOG,
    log: data,
    receivedAt: Date.now()
  };
};

const receiveLogs = data => {
  return {
    type: SUCCESS_FETCH_LOGS,
    hits: data,
    receivedAt: Date.now()
  };
};

export const fetchLogs = params => {
  return dispatch => {
    dispatch(requestLogs());
    return api.get('search/access', {params: params})
      .then(response => dispatch(receiveLogs(response.data)));
  };
};

export const fetchLogById = id => {
  return dispatch => {
    dispatch(requestLog());
    return api.get(`logs/${id}`)
      .then(response => dispatch(receiveLog(response.data)));
  };
};

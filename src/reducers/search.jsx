const initial = {
  hits: [],
  selected: null
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'REQUEST_LOGS':
      state = Object.assign({}, state, {
        hits: [],
        selected: null
      });
      break;
    case 'SUCCESS_FETCH_LOGS':
      state = Object.assign({}, state, {
        hits: action.hits
      });
      break;
    case 'SUCCESS_FETCH_LOG':
      state = Object.assign({}, state, {
        selected: action.log
      });
      break;
    default:
      break;
  }

  return state;
};

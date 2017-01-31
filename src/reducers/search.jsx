const initial = {
  hits: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'REQUEST_LOGS':
      state = Object.assign({}, state, {
        hits: []
      });
      break;
    case 'SUCCESS_FETCH_LOGS':
      console.log(action.hits)
      state = Object.assign({}, state, {
        hits: action.hits
      });
      break;
    default:
      break;
  }

  return state;
};

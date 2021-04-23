const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_WORD":
      return { ...state, word: action.word };
    case "REQUEST_RESULTS":
      return { ...state, receiving: true };
    case "RECEIVE_RESULTS":
      return { ...state, json: action.json, receiving: false };
    default:
      return state;
  }
};

export default reducer;

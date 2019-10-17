// actions
// STATE(before call)
export const SEARCH_WORD = "SEARCH_WORD";
// STATE(during call)
export const REQUEST_RESULTS = "REQUEST_RESULTS";
// STATE(answer received)
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

// action creators
export const searchWord = word => ({
  type: "SEARCH_WORD",
  word
});
export const requestResults = () => ({
  type: "REQUEST_RESULTS"
});
export const receiveResults = () => ({
  type: "RECEIVE_RESULTS",
  json
});

export function getSearchResults(dispatch, word) {
  dispatch(requestResults());
  fetch(`https://www.googleapis.com/youtube/v3/search?key=${word}`)
    .then(res => res.json(), err => console.log(err))
    .then(json => {
      console.log(json);
      receiveResults(json);
    });
}

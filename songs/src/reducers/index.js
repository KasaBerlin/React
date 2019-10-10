import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "911 Is A Joke", duration: "4:44" },
    { title: "Barbie Girl", duration: "2:38" },
    { title: "Karma Chameleon", duration: "3:52" },
    { title: "Hello", duration: "2:38" },
    { title: "Song2", duration: "2:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selected: selectedSongReducer
});

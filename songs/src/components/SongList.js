import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return <div>SONG LIST</div>;
  }
}
// provides Component with data from the store; returns new connected Component Class;
// will be called whenever the store state changes
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);

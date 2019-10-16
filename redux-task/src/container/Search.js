import React from "react";
import { connect } from "react-redux";
import { getSearchResults } from "../actions";

const Search = ({ getResults }) => (
  <form className="searchBar">
    <input type="text" name="name" />
    <button
      type="submit"
      value={this.state.value}
      onClick={e => getResults(undefined, e.target.value)}
    >
      <i className="fas fa-search"></i>
    </button>
  </form>
);

const mapStateToProps = state => ({
  word: this.state.value
});
const dispatchStateToProps = () => ({
  getSearchResults: getResults,
  word: this.state.value
});

Search = connect(
  mapStateToProps,
  dispatchStateToProps
)(Search);

export default Search;

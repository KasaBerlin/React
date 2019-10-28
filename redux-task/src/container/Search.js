import React, { createRef } from "react";
import { connect } from "react-redux";
import { getSearchResults } from "../actions";

const Search = ({ getResults }) => {
  const titleInput = createRef();
  <form className="searchBar" onSubmit={getResults(undefined, e.target.value)}>
    <input type="text" name="name" ref={titleInput} />
    <button type="submit">
      <i className="fas fa-search"></i>
    </button>
  </form>;
};

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

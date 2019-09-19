import React from "react";

class ShowAllPosts extends React.Component {
  outputPost = props => {
    Object.keys(this.props.items).map(uuid => {
      console.log(this.props.items[uuid].comment);
      return <div>{this.props.items[uuid].comment}</div>;
    });
  };

  render() {
    return <div>{this.outputPost()}</div>;
  }
}

export default ShowAllPosts;

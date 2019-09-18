import React from "react";


class ShowAllPosts extends React.Component {

  render() {
    return (
      <div >
        <h2>Good morning Developers!</h2>
        <p>{this.props.user}</p>
        <p>{this.props.comment}</p>
        <p>comment by {this.props.user} {this.props.date}</p>
      </div>
    );
  }
}
export default ShowAllPosts;

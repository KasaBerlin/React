import React from "react";

class ShowAllPosts extends React.Component {
  constructor(props) {
    super(props);
    state = {
        postList=[]
    };
  }
  render() {
    return (
      <div>
        <h2>Good morning Developers!</h2>
        <p id="comment-output"></p>
        <p id="date-output"></p>
      </div>
    );
  }
}
export default ShowAllPosts;

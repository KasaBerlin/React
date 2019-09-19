import React from "react";

class ShowSinglePost extends React.Component {
  userInput = React.createRef();
  titleInput = React.createRef();
  commentInput = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const user = this.userInput.current.value.trim();
    const title = this.titleInput.current.value.trim();
    const comment = this.commentInput.current.value.trim();
    this.props.addPost(user, title, comment);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" ref={this.userInput} required></input>
          <br />
          <label>Title:</label>{" "}
          <input type="text" ref={this.titleInput} required></input>
          <br />
          <label>Content:</label>
          <textarea
            rows="5"
            cols="90"
            ref={this.commentInput}
            required
          ></textarea>
          <br />
          <input type="submit" value="Create a post"></input>
          <br />
        </form>
      </div>
    );
  }
}

export default ShowSinglePost;

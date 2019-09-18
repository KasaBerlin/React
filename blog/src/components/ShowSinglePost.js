import React from "react";

class ShowSinglePost extends React.Component {
  user = React.createRef();
title = React.createRef();
 comment = React.createRef();
 handleSubmit = e => {
     e.preventDefault();
         let newPost = [
           {
             user: this.user.current.value.trim(),
             title: this.title.current.value.trim(),
             comment: this.comment.current.value.trim()
           }
    ]
    this.props.postList{newPost}
    e.currentTarget.reset()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" ref={this.user} required></input>
          <br />
          <label>Title:</label>{" "}
          <input type="text" ref={this.title} required></input>
          <br />
          <label>Content:</label>
          <textarea rows="5" cols="90" ref={this.comment} required></textarea>
          <br />
          <input
            type="submit"
            value="Create a post"
            onClick={() => this.getPost()}
          ></input>
          <br />
        </form>
      </div>
    );
  }
}

export default ShowSinglePost;

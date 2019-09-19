import React from "react";
import "./App.css";
import uuid from "uuid/v4";

import Home from "./components/Home";
import ShowSinglePost from "./components/ShowSinglePost";
import ShowAllPosts from "./components/ShowAllPosts";

import { Route, Switch, Redirect, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: {}
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost = (user, title, comment) => {
    const post = {
      uuid: uuid(),
      user: user,
      title: title,
      comment: comment,
      date: new Date().toLocaleString(),
      done: false
    };
    this.setState(state => {
      state.postList[post.uuid] = post;
      return state;
    });
  };

  render() {
    console.log(this.state.postList);
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create A Post</Link>
            <Link to="ShowAllPost">Show Current Post</Link>
          </nav>
        </header>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              path="/create"
              render={props => (
                <ShowSinglePost addPost={this.addPost} isAuthed={true} />
              )}
            ></Route>
            <Route
              path="/showallpost"
              render={props => (
                <ShowAllPosts items={this.state.postList} isAuthed={true} />
              )}
            ></Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

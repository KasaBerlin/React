import React from "react";
import "./App.css";
import uuid from "uuid/v4";

import Home from "./components/Home";
import ShowSinglePost from "./components/ShowSinglePost";
import ShowAllPosts from "./components/ShowAllPosts";

import { Route, Switch,  Link} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: {},
    };
    // this.handleClick = this.handleClick.bind(this)
    this.addPost = this.addPost.bind(this);
  }

  addPost = (user, title, comment) => {
    const post = {
      uuid: uuid(),
      user: user,
      title: title,
      comment: comment,
      date: new Date().toLocaleString(),
      showing: false
    };
    this.setState(state => {
      state.postList[post.uuid] = post;
      return state;
    });
  };

emptyPostList = () => Object.keys(this.state.postList).length === 0?
<h2>No posts yet!</h2>:<ShowAllPosts items={this.state.postList} handleClick={this.handleClick} isAuthed={true} />

handleClick=(uuid)=>{
  console.log(uuid)
  this.setState(state=>{
  state.postList[uuid].showing=!state.postList[uuid].showing
return state
  })  
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create A Post</Link>
            <Link to="/showallposts">Show Current Post</Link>
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
              path="/showallposts"
              render={props => this.emptyPostList()}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

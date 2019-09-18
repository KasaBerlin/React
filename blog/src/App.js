import React from "react";
import "./App.css";

import Home from "./components/Home";
import ShowSinglePost from "./components/ShowSinglePost";
import ShowAllPosts from "./components/ShowAllPosts";

import { Route, Switch, Redirect, Link } from "react-router-dom";

function App() {
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
          <Route path="/create" component={ShowSinglePost}></Route>
          <Route path="/showallpost" component={ShowAllPosts}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Messages from "./components/Messages";
import About from "./components/About";

// with exact path you only one link not the sibling
// switch switches dierctly to home

function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="App-Intro"></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/messages" component={Messages} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Start from "./components/Start";
import Projects from "./components/Projects";
import Products from "./components/Products";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Router Example</h1>
        <nav>
          <a href="/">Start</a>
          <a href="Projects">Projects</a>
          <a href="Products">Products</a>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/projects" component={Projects} />
            <Route path="/products" component={Products} />
            <Route component={Error} />
            <Redirect to="/" />
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;

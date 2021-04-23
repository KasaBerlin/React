import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Router = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/aboutme" component={About} />
      <Route path="/work" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </HashRouter>
);

export default Router;
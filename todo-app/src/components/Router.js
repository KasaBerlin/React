import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Help from "./Help";
import NotFound from "./NotFound";

// no third path because it switches only between these two

const Router = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Router;

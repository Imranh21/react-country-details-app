import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Country from "../pages/Country";

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:name" component={Country} />
        </Switch>
      </div>
    );
  }
}

export default Router;

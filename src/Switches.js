import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import App from "./App";
import Display from "./Display";
import ThemeDataDisplay from "./ThemeDataDisplay";

class Switches extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact to="/" component={App} />
        {/* <Route to="/display" component={Display} /> */}
        <Route to="/themeDataDisplay" component={ThemeDataDisplay} />
      </Switch>
    );
  }
}

export default Switches;

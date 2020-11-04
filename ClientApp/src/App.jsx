import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false
    };
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

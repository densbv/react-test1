import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from "./app/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>

              </React.Fragment>
            )}
          />
          <Redirect to="/" />
          <Route exact path="/login" />
          <Route exact path="/config" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

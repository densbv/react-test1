import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./app/Navbar";
import { Login } from "./features/Login";
import { Config } from "./features/Config";
import { Dashboard } from "./features/Dashboard";
import useToken from "./app/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/Config">
            <Config />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

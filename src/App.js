import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./app/Navbar";
import { Login } from "./features/Login";
import { UserList } from "./features/users/UserList";
import { Dashboard } from "./features/Dashboard";
import { UserView } from "./features/users/UserView";
import { EditUser } from "./features/users/EditUser";
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
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/users/:userId" component={UserView} />
          <Route exact path="/users/edit/:userId" component={EditUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

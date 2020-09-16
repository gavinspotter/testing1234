import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Jesus from "./9-15-20/Jesus";
import Peter from "./9-15-20/Peter";
import John from "./9-15-20/John";
import James from "./9-15-20/James";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Jesus />
        </Route>
        <Route path="/peter" exact>
          <Peter />
        </Route>
        <Route path="/john" exact>
          <John />
        </Route>
        <Route path="/james" exact>
          <James />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

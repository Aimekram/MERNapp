import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";

import Home from "../components/Home"
import NewStudent from "../components/NewStudent"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new">
          <NewStudent />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

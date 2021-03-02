import React from "react";
import "./scss/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index"

function App() {
  return (<Router>
    <Switch>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>)
}

export default App;

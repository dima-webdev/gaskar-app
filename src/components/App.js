import React from 'react';
import Cabinet from "./Cabinet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "../pages/SignIn";
import HomePage from "../pages/HomePage";

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/" exact>
                      <HomePage />
                  </Route>
                  <Route path="/cabinet">
                      <Cabinet />
                  </Route>
                  <Route path="/auth">
                      <SignIn />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;

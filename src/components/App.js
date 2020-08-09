import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import { PrivateRoute } from "../routes/PrivateRoute";
import ResponsiveDrawer from "./ResponsiveDrawer";

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <PrivateRoute exact path="/cabinet" component={ResponsiveDrawer} />
                  <Route path="/" exact component={SignIn} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;

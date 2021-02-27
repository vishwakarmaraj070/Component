import React, { useEffect } from "react";
import "./App.css";
import "../src/scss/styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PageLoader from "./master/component/PageLoader";

// lazy import
const Dashboard = React.lazy(() => import("./master/pages/Dashboard"));

const App = (props) => {

 
  return (
    <main id="saral-pro-app">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="dashboard" />} />
          <React.Suspense fallback={<PageLoader />}>
            <Route
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            />
          </React.Suspense>
        </Switch>
      </Router>
    </main>
  );
}

export default App;

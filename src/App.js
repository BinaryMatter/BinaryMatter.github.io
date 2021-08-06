import React from 'react';
import './App.scss';

import { Switch, Route } from "react-router-dom";
import { routes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="container">
      <Switch>
          {routes.map((route) => (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))}
      </Switch>
    </div>
  );
}

export default App;

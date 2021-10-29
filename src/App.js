import React from 'react'

import Header from "./components/header"
import Login from './components/login'
import Registration from './components/registration'

import { BrowserRouter, Route, Switch } from "react-router-dom"


function App() {
  return (
      <div className="App">
          <Header />
          <BrowserRouter>
              <Switch>
                  <Route path="/" component={Login} exact />
                  <Route path="/registration" component={Registration} exact />
              </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;

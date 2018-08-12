import React, { Component } from 'react';
import {Switch,Route,BrowserRouter} from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';

import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route  exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

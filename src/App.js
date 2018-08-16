import React, { Component } from 'react';
import {Switch,Route,BrowserRouter} from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';

import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Buttons from './components/Component/Buttons';
import ForgetPassword from './components/Login/ForgetPassword';
import Badges from './components/Component/Badges';
import Tabs from './components/Component/Tabs';
import SocialButtons from './components/Component/SocialButtons';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route  exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forget-password" component={ForgetPassword} />
          <Route exact path="/ui-buttons" component={Buttons} />
          <Route exact path="/ui-badges" component={Badges} />
          <Route exact path="/ui-tabs" component={Tabs} />
          <Route exact path="/ui-social-buttons" component={SocialButtons} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

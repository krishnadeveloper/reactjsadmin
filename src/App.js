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
import Cards from './components/Component/Cards';
import Alerts from './components/Component/Alerts';
import ProgressBars from './components/Component/ProgressBars';
import Modals from './components/Component/Modals';
import Switches from './components/Component/Switches';
import Grids from './components/Component/Grids';
import Typhography from './components/Component/Typhography';
import TableRouter from './components/Tables/TableRouter';
import NoMatch from './components/Comman/NoMatch';
import FormRouter from './components/Forms/FormRouter';
let match;
class Router extends Component {
  constructor(props){
    super(props)
    match = props.match;
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forget-password" component={ForgetPassword} />
          <Route path="/ui-buttons" component={Buttons} />
          <Route path="/ui-badges" component={Badges} />
          <Route path="/ui-tabs" component={Tabs} />
          <Route path="/ui-social-buttons" component={SocialButtons} />
          <Route path="/ui-cards" component={Cards} />
          <Route path="/ui-alerts" component={Alerts} />
          <Route path="/ui-progressbar" component={ProgressBars} />
          <Route path="/ui-modals" component={Modals} />
          <Route path="/ui-switches" component={Switches} />
          <Route path="/ui-grids" component={Grids} />
          <Route path="/ui-typgraphy" component={Typhography} />
          <Route path="/table" component={TableRouter} />
          <Route path="/forms" component={FormRouter} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

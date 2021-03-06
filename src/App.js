import React, { Component } from 'react';
import TabBarCom from "./common/tabBar"
import {
  Home,
  Cinema,
  Eticket,
  Mine
} from "@views";
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact/>
          <Route path="/home" component={Home}/>
          <Route path="/cinema" component={Cinema}/>
          <Route path="/eticket" component={Eticket}/>
          <Route path="/mine" component={Mine}/>
        </Switch>
       <TabBarCom/>
      </Router>
    );
  }
}

export default App;

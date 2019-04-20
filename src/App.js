import React, { Component } from 'react';
import TabBarCom from "./common/tabBar"
import {
  Home,
  Newphone,
  Mine
} from "@views";
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact/>
          <Route path="/home" component={Home}/>
          <Route path="/newphone" component={Newphone}/>
          <Route path="/mine" component={Mine}/>
         
        </Switch>
       <TabBarCom/>
      </Router>
      </div>
    );
  }
}

export default App;

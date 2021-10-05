import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import Profiles from "./pages/Profiles/Profiles";
import Login from './pages/Login/Login';
import LoggedProfile from "./pages/LoggedProfile/LoggedProfile";

export function App() {
  
  return (
    <div className="App">
      <Link to="/login"><h1>Arabox</h1></Link>
      <div className="content">
        <Switch>
          <Route path="/login" exact={true} component={Login}/>
          <Route path="/profiles" exact={true} component={Profiles} />
          <Route path="/games" exact={true} component={LoggedProfile} />
        </Switch>
      </div>
    </div>
  );
}

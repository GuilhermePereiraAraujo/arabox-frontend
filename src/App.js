import React from "react";
import { Switch, Route} from "react-router-dom";
import './App.css';
import Profiles from "./pages/Profiles/Profiles";
import Login from './pages/Login/Login';
import LoggedProfile from "./pages/LoggedProfile/LoggedProfile";
import '../src/styles/Login.css'
import Home from "./pages/Home/Home";
import '../src/styles/Home.css'
import Header from "./components/Header/Header";
import '../src/styles/Header.css'
import Viewgame from "./pages/ViewGame/ViewGame";
import UpdateGame from "./pages/UpdateGame/UpdateGame";
import CreateGame from "./pages/CreateGame/CreateGame";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import CreateUser from "./pages/CreateUser/CreateUser";
import LogOut from "./components/LogOut/LogOut";

export function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/login" exact={true} component={Login}/>
          <Route path="/logout" exact={true} component={LogOut}/>
          <Route path="/profiles" exact={true} component={Profiles}/>
          <Route path="/games" exact={true} component={LoggedProfile}/>
          <Route path="/game/:id" exact={true} component={Viewgame}/>
          <Route path="/game/update/:id" exact={true} component={UpdateGame}/>
          <Route path="/creategame" exact={true} component={CreateGame}/>
          <Route path="/createprofile" exact={true} component={CreateProfile}/>
          <Route path="/createuser" exact={true} component={CreateUser}/>
        </Switch>
      </div>
    </div>
  );
}

import React from "react";
import { Switch, Route} from "react-router-dom";
import './App.css';
import Profiles from "./pages/Profiles/Profiles";
import Login from './pages/Login/Login';
import MyGames from "./pages/MyGames/MyGames";
import '../src/styles/Login.css'
import Home from "./pages/Home/Home";
import '../src/styles/Home.css'
import Header from "./components/Header/Header";
import '../src/styles/Header.css'
import './components/GamesCard/GamesCard.css'
import ViewGame from "./pages/ViewGame/ViewGame";
import UpdateGame from "./pages/UpdateGame/UpdateGame";
import CreateGame from "./pages/CreateGame/CreateGame";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import CreateUser from "./pages/CreateUser/CreateUser";
import LogOut from "./components/LogOut/LogOut";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import './pages/ViewGame/ViewGame.css'
import DeleteGame from "./pages/DeleteGame/DeleteGame";
import CreateGenre from "./pages/CreateGenre/CreateGenre";

export function App() {
  console.error(3);
  return (
    
    <div className="App">
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home}/> 
          <Route path="/login" exact={true} component={Login}/>
          <Route path="/logout" exact={true} component={LogOut}/>
          <Route path="/profiles" exact={true} component={Profiles}/>
          <Route path="/mygames/:id" exact={true} component={MyGames}/>
          <Route path="/game/:id" exact={true} component={ViewGame}/>
          <Route path="/game/update/:id" exact={true} component={UpdateGame}/>
          <Route path="/game/delete/:id" exact={true} component={DeleteGame}/>
          <Route path="/creategame" exact={true} component={CreateGame}/>
          <Route path="/creategenre" exact={true} component={CreateGenre}/>
          <Route path="/createprofile" exact={true} component={CreateProfile}/>
          <Route path="/createuser" exact={true} component={CreateUser}/>
          <Route path="/updateuser/:id" exact={true} component={UpdateUser}/> 

          
          
        </Switch>
      </div>
    </div>
  );
}

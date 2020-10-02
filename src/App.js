import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components /Header/Header';
import PostHolder from './Components /PostHolder/PostHolder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Notfound from './Components /Notfound/Notfound';
import PostDetail from './Components /PostDetail/PostDetail';
function App() {
  return (
    <div className="App">
      
     
    <Router>
      <Switch>
        <Route path="/home"><Header></Header> <PostHolder></PostHolder></Route>
          
        <Route path="/post/:id">
          <PostDetail></PostDetail>
        </Route>
        <Route path="/"><Header></Header><PostHolder></PostHolder></Route>
        <Route path="*">
            <Notfound></Notfound>
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

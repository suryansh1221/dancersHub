// This example is live editable
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
// Importing Zoom effect
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/dashboard' exact component={Dashboard}></Route>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

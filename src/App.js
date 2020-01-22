// This example is live editable
import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react'
import {BrowserRouter, Route} from 'react-router-dom'

import  Home  from "./Home/Home";
import Login from "./Login/Login"
 // Importing Zoom effect
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid >
        <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
            </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
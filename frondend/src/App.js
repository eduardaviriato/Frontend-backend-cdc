import React, { Component } from 'react';
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import CDC from './cdc';
import Index from './ind';
import Create from './create.component';
import Edit from './edit.component';
import Menu from './menu';
import Creat from './create';



class App extends Component {
  render() {
    return (
      
      <div>
        
      <Router>
      <Switch>
          <Route exact path='/create/' component={ Create } />
          <Route path='/edit/:id' component={ Edit } />
          <Route path='/cdc' component={ CDC } />
          <Route path='/ind/' component={ Index } />
          <Route path='/menu' component={ Menu } />
          <Route path='/creat' component={ Creat } />

          <Route path='/' component={ CDC} />
          
      </Switch>
  </Router>
  </div>
      
    );
  }
}

export default App;

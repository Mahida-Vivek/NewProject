// import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React, {useState} from 'react';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={Login} />
        <Route exact path = '/Home' component={Home}
        />
        <Route exact path = '/' component={Login}/>
        <Route exact path = '/Registration' component={() => <Registration authorized={true} />}
        />
        <Route exact path = '/' component={Registration} />
        <Route exact path = '/Login' component={Login}
        />
      </Switch>
    </Router>
  );
}

export default App;

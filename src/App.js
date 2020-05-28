import React from 'react';
import Weather from './containers/weather/weather'
import Covid from './containers/covidCases/CovidCases'
import Navigation from './components/Navigation/navigationItems/navigationItems'
import {Route , Switch  } from 'react-router-dom'
import './App.css';

const  App=()=> {
  return (
    <div className="App">
        <Navigation />
        <Switch>
          <Route   path="/covid" component={Covid}  />
          <Route  exact path="/" component={Weather}  />
        </Switch>
    </div>
  );
}

export default App;

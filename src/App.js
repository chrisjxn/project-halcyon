import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Race from './components/race/Race';
import Races from './components/races/Races';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/races/:id' component={Race} />
            <Route path='/races' component={Races} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

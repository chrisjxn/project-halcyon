import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Races from './components/races/Races';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Races />
        </div>
      </HashRouter>
    );
  }
}

export default App;

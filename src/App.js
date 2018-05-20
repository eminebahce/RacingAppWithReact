import React, { Component } from 'react';
import './App.css';
import GameSearch from './components/GameSearch';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <GameSearch/>
      </div>
    );
  }
}

export default App;

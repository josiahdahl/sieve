import React, { Component } from 'react';
import './App.css';
import { NewReleases } from './containers/NewReleases';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewReleases />
      </div>
    );
  }
}

export default App;

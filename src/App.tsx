import React, { Component } from 'react';
import './App.css';
import { NewReleases } from './containers/NewReleases';
import { Header } from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NewReleases />
      </div>
    );
  }
}

export default App;

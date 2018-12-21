import React, { Component } from "react";
import "./App.css";
import { NewReleases } from "./containers/NewReleases";
import { Header } from "./components/Header";
import { Pagination } from "./containers/Pagination";

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Pagination />
        </Header>
        <NewReleases />
      </div>
    );
  }
}

export default App;

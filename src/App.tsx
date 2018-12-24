import React, { Component } from "react";
import "./App.css";
import { NewReleases } from "./containers/NewReleases";
import { Header } from "./components/Header";
import { Pagination } from "./containers/Pagination";
import { FilterToggle } from "./containers/FilterToggle";

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <FilterToggle />
          <Pagination />
        </Header>
        <NewReleases />
      </div>
    );
  }
}

export default App;

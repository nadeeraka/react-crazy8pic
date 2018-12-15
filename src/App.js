import React, { Component } from "react";
import MyNav from "./components/nav";
import SearchBar from "./components/serch";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNav />
        <SearchBar />
      </div>
    );
  }
}

export default App;

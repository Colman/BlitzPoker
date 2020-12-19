import React, { Component } from "react";
import { baseUrl } from "../config.json";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Blitz Poker</div>

        <div className="app-button">Create Room</div>
        <div className="app-button">Join Room</div>
      </div>
    );
  }
}

export default App;

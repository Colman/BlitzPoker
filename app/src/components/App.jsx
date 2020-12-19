import React, { Component } from "react";
import "./App.css";

class App extends Component {
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

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src="/Felt1.jpg" className="app-image" />
        <img src="/Jack.jpg" className="app-jack app-jack1" />
        <img src="/Jack.jpg" className="app-jack app-jack2" />
        <img src="/Jack.jpg" className="app-jack app-jack3" />
        <img src="/Jack.jpg" className="app-jack app-jack4" />
        <img src="/Jack.jpg" className="app-jack app-jack5" />
        <div className="app-cover"></div>
        <div className="app-menu">
            <div className="app-title">Blitz Poker</div>

            <button className="app-button app-button-top">Create Room</button>
            <button className="app-button">Join Room</button>
        </div>
      </div>
    );
  }
}

export default App;

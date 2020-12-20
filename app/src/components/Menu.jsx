import React, { Component } from "react";
import "./Menu.css";
import { baseUrl } from "../config.json";
import Edit from "./Edit.jsx";
import Settings from "./Settings.jsx";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      main: 0,
    };
  }

  getImagePath() {
    return "http://localhost:3000/menu.jpg";
  }

  createRoom() {
    this.props.onRoom("testKey");
  }

  getMain() {
    switch (this.state.main) {
      case 1:
        return <div className="menu-join"></div>;

      case 2:
        return <Edit />;

      case 3:
        return <Settings />;

      default:
        return (
          <div className="menu-main">
            <button
              onClick={() => {
                this.createRoom();
              }}
              className="menu-button menu-button-top"
            >
              Create Room
            </button>
            <button
              onClick={() => {
                this.setState({ main: 1 });
              }}
              className="menu-button"
            >
              Join Room
            </button>
            <button
              onClick={() => {
                this.setState({ main: 2 });
              }}
              className="menu-button"
            >
              Edit Character
            </button>
            <button
              onClick={() => {
                this.setState({ main: 3 });
              }}
              className="menu-button"
            >
              Settings
            </button>
          </div>
        );
    }
  }

  render() {
    return (
      <div
        className="menu"
        style={{ backgroundImage: "url(" + this.getImagePath() + ")" }}
      >
        <div className="menu-cover" />

        <div className="menu-content">
          <div className="menu-title">Blitz Poker</div>
          {this.getMain()}
        </div>
      </div>
    );
  }
}

export default Menu;

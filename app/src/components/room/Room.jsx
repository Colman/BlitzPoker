import React, { Component } from "react";
import "./Room.css";
import Table from "./Table.jsx";
import Chat from "./Chat.jsx";
import Actions from "./Actions.jsx";

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "AJHFD",
    };
  }

  getImagePath() {
    return "http://localhost:3000/room.jpg";
  }

  render() {
    return (
      <div className="room">
        <div className="room-top">
          <div className="room-key">Room Key - {this.state.key}</div>
        </div>

        <div
          className="room-main"
          style={{ backgroundImage: "url(" + this.getImagePath() + ")" }}
        >
          <Table />

          <div className="room-bottom">
            <Chat />
            <div className="room-space" />
            <Actions show={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default Room;

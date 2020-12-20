import React, { Component } from "react";
import "./Table.css";
import { getCardPath } from "../../utils";
import Player from "./Player.jsx";
import ReactResizeDetector from "react-resize-detector";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [2, 6, 32, 20, 33],
      players: [3, 4, 54, 54],
      width: 0,
      height: 0,
    };

    this.onResize = this.onResize.bind(this);
  }

  getCards() {
    return this.state.cards.map((card, index) => {
      let offset = 30.5 + 8 * index;
      return (
        <img
          className="table-card"
          src={getCardPath(card)}
          style={{ left: offset + "%" }}
        />
      );
    });
  }

  getPlayers() {
    if (this.state.width == 0 || this.state.height == 0) {
      return;
    }

    const sep = (2 * Math.PI) / this.state.players.length;
    const a = this.state.width / 2;
    const b = this.state.height / 2;
    return this.state.players.map((player, index) => {
      const angle = sep * index;
      const left = a * Math.cos(angle) + this.state.width / 2;
      const margin = this.refs.table.clientHeight * 0.15;
      const top = this.state.height / 2 + margin - b * Math.sin(angle);
      return (
        <Player
          top={top}
          left={left}
          flipped={angle >= Math.PI / 2 && angle < (3 * Math.PI) / 2}
        />
      );
    });
  }

  onResize() {
    this.setState({
      width: this.refs.image.clientWidth,
      height: this.refs.image.clientHeight,
    });
  }

  render() {
    return (
      <div className="table" ref="table">
        <img className="table-image" src="/table2.png" ref="image" />
        {this.getCards()}

        {this.getPlayers()}

        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
      </div>
    );
  }
}

export default Table;

import React, { Component } from "react";
import "./Player.css";
import ReactResizeDetector from "react-resize-detector";
import { getPlayerImage, getCardPath } from "../../utils";

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [null, null],
      name: "ChimpSlaya69",
      chips: 1233,
    };

    this.resize = this.resize.bind(this);
  }

  getCards() {
    return this.state.cards.map((card, index) => {
      return (
        <img
          ref={"card" + index}
          className="player-card"
          src={getCardPath(card)}
        />
      );
    });
  }

  resize() {
    let player = this.refs.player;
    const offset = player.clientHeight * 0.5;
    player.style.top = this.props.top - offset + "px";
    if (this.props.flipped) {
      player.style.left = this.props.left - player.clientWidth + offset + "px";
    } else {
      player.style.left = this.props.left - offset + "px";
    }

    let content = this.refs.content;
    content.style.borderRadius = content.offsetHeight * 0.5 + "px";

    let image = this.refs.image;
    if (this.props.flipped) {
      image.style.right = "-3px";
    } else {
      image.style.left = "-3px";
    }

    let main = this.refs.main;
    const fullWidth = content.clientWidth - content.clientHeight - 3;
    if (this.props.flipped) {
      main.style.left = fullWidth * 0.08 + "px";
    } else {
      main.style.left = content.clientHeight + 3 + fullWidth * 0.08 + "px";
    }
    main.style.width = fullWidth * 0.84 + "px";
    main.style.fontSize = content.clientHeight * 0.25 + "px";

    const cardsWidth = fullWidth - content.clientHeight / 2;
    let card0 = this.refs.card0;
    if (card0) {
      card0.style.width = cardsWidth * 0.475 + "px";
      if (this.props.flipped) {
        card0.style.left = content.clientHeight / 2 + "px";
      } else {
        card0.style.left = content.offsetHeight + "px";
      }
    }
    let card1 = this.refs.card1;
    if (card1) {
      card1.style.width = cardsWidth * 0.475 + "px";
      if (this.props.flipped) {
        card1.style.left = content.clientHeight / 2 + cardsWidth * 0.525 + "px";
      } else {
        card1.style.left = content.offsetHeight + cardsWidth * 0.525 + "px";
      }
    }
  }

  render() {
    return (
      <div className="player" ref="player">
        {this.getCards()}

        <div className="player-content" ref="content">
          <img
            className="player-image"
            ref="image"
            src={getPlayerImage(this.state.name)}
          />

          <div className="player-main" ref="main">
            <div className="player-name">{this.state.name}</div>
            <div className="player-chips">
              {this.state.chips.toLocaleString()}
            </div>
          </div>

          <ReactResizeDetector
            handleWidth
            handleHeight
            onResize={this.resize}
          />
        </div>
      </div>
    );
  }
}

export default Player;

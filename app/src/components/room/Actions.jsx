import React, { Component } from "react";
import "./Actions.css";

class Actions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: -1,
    };
  }

  getButtons() {
    if (this.props.current == -1) {
      return [
        <div className="actions-space" />,
        <button className="actions-button">Check</button>,
        <button className="actions-button">Bet</button>,
      ];
    }

    return [
      <button className="actions-button">Fold</button>,
      <button className="actions-button">Call</button>,
      <button className="actions-button">Raise</button>,
    ];
  }

  render() {
    if (this.props.show) {
      return (
        <div className="actions">
          <div className="actions-space" />
          <div className="actions-selector"></div>

          {this.getButtons()}
        </div>
      );
    }

    return <div className="actions" />;
  }
}

export default Actions;

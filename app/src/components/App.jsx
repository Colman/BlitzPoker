import React, { Component } from "react";
import { baseUrl } from "../config.json";
import "./App.css";
import Menu from "./Menu.jsx";
import Room from "./room/Room.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      key: null,
    };
  }

  getPage() {
    if (this.state.page == 0) {
      return (
        <Menu
          onRoom={(key) => {
            this.setState({ page: 1, key });
          }}
        />
      );
    }

    return (
      <Room
        key={this.props.key}
        onBack={() => {
          this.setState({ page: 0 });
        }}
      />
    );
  }

  render() {
    return <div className="app">{this.getPage()}</div>;
  }
}

export default App;

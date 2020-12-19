class Holdem {
  constructor(listener) {
    this.state = {};

    this.state.players = {};
    this.state.started = false;
    this.state.dealer = -1;
    this.state.pot = 0;
    this.state.community = [];

    this.listener = listener;
  }

  start() {}

  addPlayer(name) {
    this.state.players[name] = { chips: 0, cards: [] };
  }

  removePlayer(name) {
    delete this.state.players[name];
  }

  takeAction(name, action) {}

  deal() {
    Object.keys(this.players).forEach((name) => {
      this.players[name].folded = false;
      this.players[name].cards = [];
      this.players[name].cards.push(this.getTop());
      this.players[name].cards.push(this.getTop());

      this.sendState(name);
    });
  }

  getTop() {
    while (true) {
      const card = Math.floor(Math.random() * 52);
      if (!this.cardUsed(card)) {
        return card;
      }
    }
  }

  cardUsed(card) {
    if (card in this.community) {
      return true;
    }

    const names = Object.keys(this.players);
    for (let i = 0; i < names.length; i++) {
      const player = this.players[name];
      if (card in player.cards) {
        return true;
      }
    }

    return false;
  }

  sendState(name) {
    const newState = { ...this.state };
    Object.keys(newState.players).forEach((name2) => {
      if (name != name2) {
        newState.players[name2].cards.map((card) => null);
      }
    });
    this.listener(name, newState);
  }
}

module.exports = Holdem;

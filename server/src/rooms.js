const Holdem = require("./Holdem");

let rooms = {};

function createRoom(client) {
  if (getRoomByClient(client)) {
    throw "Already in a room";
  }

  let key = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * 26);
    key += letters[index];
  }

  rooms[key] = { users: [[client, null]] };
  const listener = (name, state) => {
    const user = rooms[key].users.find((user) => user[1] == name);
    user[0].sendState(state);
  };
  rooms[key].game = new Holdem(listener);

  return key;
}

function joinRoom(client, key) {
  if (rooms[key]) {
    if (getRoomByClient(client)) {
      throw "Already in a room";
    }
    rooms[key].users.push([client, null]);
  } else {
    throw "Room does not exist";
  }
}

function leaveRoom(client) {
  const keys = Object.keys(rooms);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    for (let j = 0; j < rooms[key].length; j++) {
      if (client == rooms[key][j]) {
        rooms[key].splice(j, 1);
        return;
      }
    }
  }
}

function getRoomByClient(client) {
  const keys = Object.keys(rooms);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    for (let j = 0; j < rooms[key].users.length; j++) {
      if (client == rooms[key].users[j]) {
        return rooms[key];
      }
    }
  }
}

function joinGame(client, name) {
  const room = getRoomByClient(client);

  if (typeof name != "string") {
    throw "Invalid name";
  }

  const index = room.users.find((user) => name == user[1]);
  if (index == -1) {
    throw "Name already in use";
  }

  for (let j = 0; j < room.users.length; j++) {
    if (client == room.users[j][0]) {
      room.users[j][1] = name;
      room.game.addPlayer(name);
      break;
    }
  }
}

function takeAction(client, action) {
  const room = getRoomByClient(client);
}

module.exports = {
  createRoom,
  joinRoom,
  leaveRoom,
  joinGame,
};

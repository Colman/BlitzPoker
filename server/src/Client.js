const rooms = require("./rooms");

class Client {
  constructor(userId, send) {
    this.userId = userId;
    this.send = send;

    this.handleMessage = this.handleMessage.bind(this);
    this.unsubscribeAll = this.unsubscribeAll.bind(this);
  }

  handleMessage(message) {
    switch (message.action) {
      case "create":
        const key = rooms.createRoom(ws);
        this.send({ success: true, response: key });
        break;

      case "join":
        if (typeof message.key == "string") {
          try {
            rooms.joinRoom(ws, message.key);
            this.send({ success: true, response: "Success" });
          } catch (err) {
            this.send({ success: false, response: err });
          }
        } else {
          this.send({ success: false, response: "Invalid key" });
        }
        break;

      case "leave":
        break;

      default:
        this.send({ success: false, response: "Invalid action" });
        break;
    }
  }

  close() {}
}

module.exports = Client;

const express = require("express");
const cors = require("cors");
const expressWs = require("express-ws");
const Client = require("./Client");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
expressWs(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let nextId = 0;
app.ws("*", (ws, req, next) => {
  let client = new Client(nextId, (response) => {
    try {
      ws.send(JSON.stringify(response));
    } catch (err) {
      //Do nothing
    }
  });

  ws.on("close", (e) => {
    client.close();
  });

  ws.on("message", client.handleMessage);

  nextId += 1;
});

app.listen(3001);

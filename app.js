const express = require("express");
const router = require("./routes/api");
const SERVER_RUNNING_PORT = require("./app/config/config");

const app = express();

app.use("/", router);

app.listen(SERVER_RUNNING_PORT, () =>
  console.log("server running port on" + " " + SERVER_RUNNING_PORT + "......")
);

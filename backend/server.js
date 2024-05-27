const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Api created");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  console.log(singleChat);
  res.send(singleChat);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log("server is running" + port));

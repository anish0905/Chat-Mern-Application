const mongoose = require("mongoose");

const chatModel = mongoose.Schema({
  chatName: { type: String, trim: true },
});

//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin

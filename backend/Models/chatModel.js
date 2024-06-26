const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean },

    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },

    groupAdmin: {
      type: "User",
    },
  },
  {
    timestamp: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;

//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin

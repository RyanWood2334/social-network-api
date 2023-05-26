const mongoose = require("mongoose");
const { Schema, Types, model } = require("mongoose");
const thoughtSchema = require("./Thought");
const friendSchema = require("./Friend");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    toJson: {
      virtuals: true,
    },
  }
);
userSchema.virtual("friendCount").get(function () {
  return `${this.friends.length}`;
});

const User = mongoose.model("User", userSchema);

module.exports = User;

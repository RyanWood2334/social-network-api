const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
  },
  username: {
    type: String,
    required: true,
  },
  timestamps: true,
});
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
  },
  username: {
    type: String,
    required: true,
  },
  timestamps: true,
  reactions: [reactionSchema],
  toJson: {
    virtuals: true,
  },
});
userSchema.virtual("reactionCount").get(function () {
  return `${this.reaction.length}`;
});

module.exports = thoughtSchema;

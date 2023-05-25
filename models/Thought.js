const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
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
const thoughtSchema = new mongoose.Schema({
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
  return `${this.reactions.length}`;
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;

const { Schema, model } = require("mongoose");

const reactionsSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: getDate,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

function getDate() {
  return Date.now;
}

const Reactions = model("Reactions", reactionsSchema);

module.exports = Reactions;

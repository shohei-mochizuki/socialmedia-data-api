const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Current date & time
      get: (date) => date.toLocaleDateString("en-US"), // Format date to MM/DD/YYYY
    },
  },
  {
    toJSON: { // Make getters available
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;

const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction'); // Reaction is a subdocument of Thought

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Current date & time
      get: (date) => date.toLocaleDateString("en-US"), // Format date to MM/DD/YYYY
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], // Reaction is a subdocument of Thought
  },
  {
    toJSON: { // Make virtuals and getters available
      virtuals: true, 
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property reactionCount that counts reactions
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

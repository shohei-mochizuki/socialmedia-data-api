const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
      default: Date.now,
      get: d => d.split("T")[0],
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
  {
    toJSON: {
      virtuals: true,
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

thoughtSchema
  .path('username')
  .get(function (username) {
    return username.toUpperCase();
  });

// function upper (name) {
//   return name.toUpperCase();
// };


// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

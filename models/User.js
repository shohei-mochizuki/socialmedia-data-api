const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
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
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i // Regex for email validation
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'thought', // Link to Thought document
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user', // Link to User document
      },
    ],
  },
  {
    toJSON: { // Make virtuals available
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property friendCount that counts friends
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

// Import models
const { Thought, User } = require('../models');

module.exports = {
  // GET /api/thoughts - View all thoughts
  getThoughts(req, res) { 
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // GET /api/thoughts/:thoughtId - View specific thought
  getSingleThought(req, res) { 
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // POST /api/thoughts - Create new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => { // After updating Thought document, update thoughts:[...] in User document as well
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } }, // Add an element to an array
          { new: true } // Return the new data, not the original (= default)
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created, but found no user with that ID',
            })
          : res.json('Created the thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  // PUT /api/thoughts/:thoughtId - Update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true } // Validate new input & Return the new data, not the original (= default)
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this id' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // DELETE /api/thoughts/:thoughtId - Delete thought
  deleteThought(req, res) { 
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this id' })
          : User.findOneAndUpdate( // After updating Thought document, update thoughts:[...] in User document as well
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } }, // Remove an element from an array
              { new: true } // Return the new data, not the original (= default)
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created but no user found with this id',
            })
          : res.json({ message: 'Thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // POST /api/thoughts/:thoughtId/reactions - Add reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } }, // Add an element to an array
      { runValidators: true, new: true } // Validate new input & Return the new data, not the original (= default)
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this id' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove reaction
  removeReaction(req, res) { // /
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },  // Remove an element from an array
      { new: true } // Return the new data, not the original (= default)
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this id' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};

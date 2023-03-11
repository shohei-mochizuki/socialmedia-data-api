const { connect, connection } = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
// OR mongodb://127.0.0.1:27017/socialMediaDB
connect('mongodb://localhost/developersApplications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

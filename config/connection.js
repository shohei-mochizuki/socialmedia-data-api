// Import mongoose
const { connect, connection } = require('mongoose');

// Wrap Mongoose around local connection to MongoDB (mongodb://127.0.0.1:27017/socialMediaDB is also acceptable)
connect('mongodb://localhost/socialMediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

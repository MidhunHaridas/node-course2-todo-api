const mongoose = require('mongoose');

// assigning global Promise to mongoose Promise object
mongoose.Promise = global.Promise;
// connecting to mongo db
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// use the below if deprecation warning pops up
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});

module.exports = {
	mongoose: mongoose
};
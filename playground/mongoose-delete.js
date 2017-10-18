const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// to delete all values

Todo.remove({}).then((result) => {
	console.log(result);
});

/*Todo.findOneAndRemove({_id: '59e6d4602e6e081948c3069d'}).then((todo) => {
	console.log('Deleted todo: ',todo);
}, (e) => {
		console.log('Unable to find user.', err);
	});*/

Todo.findByIdAndRemove('59e6d4602e6e081948c3069d').then((todo) => {
	console.log('Deleted todo: ',todo);
}, (e) => {
		console.log('Unable to find user.', err);
	});
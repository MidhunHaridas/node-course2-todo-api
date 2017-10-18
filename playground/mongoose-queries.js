const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59e6d4602e6e081948c3069d';
var uid = '59e6e4e431f5b91f3ba90e60';

// if(!ObjectID.isValid(id)) {
// 	return console.log('Id not valid');
// }


/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos',todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo',todo);
});*/

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));

User.findById(uid).then((user) => {
	if(!user) {
		return console.log('Unable to find user');
	}
	console.log('User details: ',user);
}).catch((e) => console.log(e));
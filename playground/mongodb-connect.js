// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to mongodb');
	}

	console.log('Connected to mongodb.');

	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	},(err, res) => {
		if (err) {
			return console.log('unable to insert todo',err);
		}

		console.log(JSON.stringify(res.ops, undefined, 2));
	});*/

	// db.collection('Users').insertOne({
	// 	name: 'Midhun',
	// 	age: 26,
	// 	location: 'Bangalore'
	// },(err, res) => {
	// 	if (err) {
	// 		return console.log('unable to insert User',err);
	// 	}

	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	// db.close();
});
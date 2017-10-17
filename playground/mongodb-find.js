// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to mongodb');
	}

	console.log('Connected to mongodb.');

	/*db.collection('Todos').find({
		_id: new ObjectID('59e5b4d792bd762d6a731f02')
	}).toArray().then((docs) => {
		console.log('Todos:: ');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to find Todos', err);
	});*/

	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos Count:: ${count}`);
	}, (err) => {
		console.log('Unable to find Todos count', err);
	});	

	db.collection('Users').find({
		name: 'Midhun'
	}).count().then((count) => {
		console.log(`Total numer of user rows:: ${count}`);
	}, (err) => {
		console.log('Unable to find user.', err);
	});

	// db.close();
});
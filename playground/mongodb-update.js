// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to mongodb');
	}

	console.log('Connected to mongodb.');

	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('59e5b4d792bd762d6a731f02'),
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});*/

	db.collection('Users').findOneAndUpdate({
		name: 'Arun',
	}, {
		$set: {
			name: 'Tousif'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});

	// db.close();
});
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = new express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// create todo
app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
 		res.status(400).send(e);
	});
});

// get todos
app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		// res.send(todos);
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});


// start server
app.listen(port, () => {
	console.log(`Server on port ${port}`);
});
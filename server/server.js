var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
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

// get by todo by id
app.get('/todos/:id', (req, res) => {
	var todoId = req.params.id;
	if(!ObjectID.isValid(todoId)) {
		return res.status(404).send({msg:"Id not valid"});
	}

	Todo.findById(todoId).then((todo) => {
	if(!todo) {
		return res.status(400).send({msg:"todo not available."});
	}
	res.send({todo});
}).catch((e) => {
	return res.status(401).send({msg:"error"});
	});
});

// to delete route
app.delete('/todos/:id', (req, res) => {
	var todoId = req.params.id;
	if(!ObjectID.isValid(todoId)) {
		return res.status(404).send({msg:"Id not valid"});
	}

	Todo.findByIdAndRemove(todoId).then((todo) => {
		if(!todo) {
			return res.status(400).send({msg:"todo not available."});
		}
		res.send({
			todo,
			status:200
		});
	}).catch((e) => {
		return res.status(401).send({
			msg:"error"
		});
	});
});


// start server
app.listen(port, () => {
	console.log(`Server on port ${port}`);
});
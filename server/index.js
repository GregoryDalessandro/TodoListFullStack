var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use('/api', router);

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});

router.get('/', function(req, res) {
  res.json({ message: 'This is actually the real api, yay!' });
});

// GET - /api/posts (Retrieve all posts)
app.get('/api/posts', function (req, res) {
  res.json({ message: 'this is where you would show all posts' });
console.log('this is a get req');
});

// POST - /api/posts (Create a new post)
app.post('/api/posts', function (req, res) {
console.log('this is a post req');
});

// GET - /api/posts/:id (Retrieve a single post by its id)
app.get('api/posts/:id', function (req, res) {
  res.json({ message: 'this is where you would show a post via id' });
console.log('this is a id get req');
});

// PUT - /api/posts/:id (Update a single post by its id)
app.put('api/posts/:id', function (req, res) {
  res.json({ message: 'this is where you would update a post via id' });
console.log('this is a put req');
});

// DELETE - /api/posts/:id (Delete a single post by its id)
app.delete('/api/posts/:id', function (req, res) {
  res.json({ message: 'this is where you would delete a post via id' });
console.log('this is a delete req');
});

// module.exports = app;

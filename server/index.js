var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

app.listen(8080, function() {
  console.log('listening on port 8080!');
});




 app.get('/', (req, res) => res.send('Hello World!'));

// GET - /api/posts (Retrieve all posts)
app.get('/api/posts', function (req, res) {
console.log('this is a get req');
});

// POST - /api/posts (Create a new post)
app.post('/api/posts', function (req, res) {
console.log('this is a post req');
});

// GET - /api/posts/:id (Retrieve a single post by its id)
app.get('api/posts/:id', function (req, res) {
console.log('this is a id get req');
});

// PUT - /api/posts/:id (Update a single post by its id)
app.put('api/posts/:id', function (req, res) {
console.log('this is a put req');
});

// DELETE - /api/posts/:id (Delete a single post by its id)
app.delete('/api/posts/:id', function (req, res) {
console.log('this is a delete req');
});

// module.exports = app;

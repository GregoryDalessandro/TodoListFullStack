var express = require('express');
var app = express();

app.listen(8080, function() {
  console.log('listening on port 8080!');
});

// GET - /api/posts (Retrieve all posts)
app.get('/api/posts', function (req, res) {

});

// POST - /api/posts (Create a new post)
app.post('/api/posts', function (req, res) {

});

// GET - /api/posts/:id (Retrieve a single post by its id)
app.get('api/posts/:id', function (req, res) {

});

// PUT - /api/posts/:id (Update a single post by its id)
app.put('api/posts/:id', function (req, res) {

});

// DELETE - /api/posts/:id (Delete a single post by its id)
app.delete('/api/posts/:id', function (req, res) {

});

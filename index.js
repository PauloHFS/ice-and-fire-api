const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const book_routes = require('./src/routes/books.routes');
const character_routes = require('./src/routes/characters.routes');

const mongodb_user = process.env['mongodb_user']
const mongodb_password = process.env[mongodb_user]

mongoose.connect(`mongodb+srv://${mongodb_user}:${mongodb_password}@cluster0.gc7j3.mongodb.net/ice-and-fire-api?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(morgan('dev'));

app.use('/books', book_routes);
app.use('/characters', character_routes);

app.listen(3000, () => {
  console.log('server started');
});
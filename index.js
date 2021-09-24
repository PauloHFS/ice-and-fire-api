require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

const book_routes = require("./src/routes/books.routes");
const character_routes = require("./src/routes/characters.routes");
const pov_character_routes = require("./src/routes/pov.routes");

const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database_name = process.env.MONGODB_DATABASE_NAME;

mongoose.connect(
  `mongodb+srv://${mongodb_user}:${mongodb_password}@cluster0.gc7j3.mongodb.net/${mongodb_database_name}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(morgan("dev"));

app.use("/books", book_routes);
app.use("/characters", character_routes);
app.use("/pov", pov_character_routes);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    books: "https://ice-and-fire-api.paulohfs.repl.co/books",
    characters: "https://ice-and-fire-api.paulohfs.repl.co/characters",
    povCharacters: "https://ice-and-fire-api.paulohfs.repl.co/pov",
  });
});

const server = app.listen(3333, () => {
  console.log("server started on localhost:3333");
});

module.exports = server;

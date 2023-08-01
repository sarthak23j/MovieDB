// var express = require("express")
// app = express()

// bodyparser = require("body-parser"),
// mongoose = require("mongoose");
// // connecting mongodb
// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://localhost:27017/imdbdb", {useNewUrlParser:
// true});
// app.use(bodyparser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");

// var mySchema = new mongoose.Schema({
// name :String
// });

// var d1slot=mongoose.model("d1slot", mySchema);
// app.get("/", function (req, res) {
// res.render("index",{ details: null })
// })
// app.get("/getdetails", function (req, res) {
// d1slot.find({}, function (err, allDetails) {
//  if (err) {
//  console.log(err);
//  } else {
//  res.render("index.ejs", { details: allDetails })

// }
// })
// })
// app.listen(8080, "localhost", function () {
// console.log("server has started");
// })

//---------------------------------------------

// const express = require("express");
// const app = express();

// app.listen(8080, () => {
//     console.log("listening on 8080");
// });

// app.use(express.static(__dirname));

// app.get("/",(req,res) => {
//     console.log(__dirname)
//     res.sendFile(__dirname+"/index.html");
// });

//---------------------------------------------

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// // Connect to the MongoDB database
// mongoose.connect('mongodb://127.0.0.1:27017/imdbdb', { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((err) => {
//     console.error('Error connecting to database:', err);
//   });

// // Define a schema for the data
// const movieSchema = new mongoose.Schema({
//   title: String,
//   year: Number,
//   genre: String,
// });

// // Create a model for the data
// const Movie = mongoose.model('Movie', movieSchema);

// app.get('/', function(req, res) {
//   // Retrieve data from the database
//   Movie.find({}, function(err, docs) {
//     if (err) throw err;

//     // Send the data to the client as a JSON object
//     res.json(docs);
//   });
// });

// app.listen(8080, function() {
//   console.log('Server listening on port 8080');
// });

//---------------------------------------------------------

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const movieSchema = new Schema({
//   title: String,
//   director: String,
//   year: Number
// });

// const Movie = mongoose.model('Movie', movieSchema);

// mongoose.connect('mongodb://127.0.0.1:27017/imdbdb', { useNewUrlParser: true, useUnifiedTopology: true });

// app.get('mongodb://127.0.0.1:27017/imdbdb/movies', function(req, res) {
//   Movie.find({}, function(err, movies) {
//     if (err) throw err;
//     res.json(movies);
//   });
// });

// app.listen(8080, function() {
//   console.log('Server listening on port 8080');
// });

//--------------------------------------------------------

var express = require("express"),
app = express(),
bodyparser = require("body-parser"),
mongoose = require("mongoose");
// connecting mongodb
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/imdbdb", {useNewUrlParser:
true});
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var mySchema = new mongoose.Schema({
name :String,
image :String,
path :String
});
var movies=mongoose.model("movies", mySchema);
// app.get("/", function (req, res) {
// res.render("index",{ details: null })
// })
app.get("/", function (req, res) {
movies.find({}).exec()
  .then(allDetails => {
    res.render("index", { details: allDetails })
  })
  .catch(err => {
    console.log(err);
    res.render("index", { details: null })
  });
})

app.use(express.static(__dirname));

app.listen(8000, "localhost", function () {
    console.log("server has started"); 
});
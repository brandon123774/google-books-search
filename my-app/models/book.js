var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: String,
  link: String,
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;

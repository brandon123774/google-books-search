var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: {type: String, default: true},
  link: {type: String, default: true},
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;

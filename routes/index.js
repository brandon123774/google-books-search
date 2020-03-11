const express = require('express');
const router = express.Router();

const booksController = require("../controllers/booksController");

router.route("/book")
    .get(booksController.findAll)
    // .get(booksController.searchApi)
    .post(booksController.save)

router.route("/book/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove)

module.exports = router;
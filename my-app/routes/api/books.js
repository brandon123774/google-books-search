var router = require("express").Router();
var booksController = require("../../controllers/booksController");

// route for  "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// route for "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

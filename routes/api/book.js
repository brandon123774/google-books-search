const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// route for  "/api/book"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// route for "/api/book/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

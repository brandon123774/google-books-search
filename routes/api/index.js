const router = require("express").Router();
const bookRoutes = require("./book");

// Book routes
router.use("/book", bookRoutes);

module.exports = router;

var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");

// API Routes route
router.use("/api", apiRoutes);

// If no API routes are used
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

var express = require("express");
var mongoose = require("mongoose");
var apiRoutes = require("./routes/index");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;

//  middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//API routes here
app.use('/api', apiRoutes);


// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks")


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

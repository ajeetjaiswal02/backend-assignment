const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const cors = require('cors');
const app = express();

require("dotenv").config();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true , useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);



app.get("/", (req, res) => {
  res.send("BACKEND API ASIGNMENT ")
});


app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
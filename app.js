// package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// declaration
const app = express();
// middle ware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

// routers
// TODO: add your router below 👇
app.get('/movie', (req,res) => {
    res.send("movies from server...")
})


// exports
module.exports = app;
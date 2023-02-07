// DEPENDENCIES
const express = require("express");
const cors = require("cors");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors()); 


// ROUTES
app.get("/", (req, res) => {
    res.status(200).send("");
});
  
app.get("/not-found", (req, res) => {
    res.status(404).json({ error: "page does not exist" });
});
  
app.get("*", (req, res) => {
    res.redirect("/not-found");
});

// EXPORT
module.exports = app;

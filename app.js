// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const postsController = require("./Controllers/postsController")

// CONFIGURATION

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors()); 
app.use("/posts", postsController);

// ROUTES
app.get("/", (req, res) => {
    res.status(200).send("Welcome To Write Tingz");
});
  
app.get("/not-found", (req, res) => {
    res.status(404).json({ error: "page does not exist" });
});
  
app.get("*", (req, res) => {
    res.redirect("/not-found");
});

// EXPORT
module.exports = app;

// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const postsController = require("./Controllers/postsController")
const passport = require('passport')
require('./Google')
const { isLoggedIn } = require('../Triane-Portfolio-Backend/validations/helpers')
// CONFIGURATION

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors()); 
app.use("/posts", postsController);

// GOOGLE ROUTES
app.get("/", (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
    //Should redirect to a google sign in
    // res.status(200).send("Welcome To Write Tingz");
});



app.get('/auth/google', 
passport.authenticate('google', {scope:['email', 'profile']})
)

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/welcome',
    failureRedirect: '/auth/google/failure'
  })
);

//REG ROUTES

app.get('/welcome', isLoggedIn, (req, res) =>{
    res.send(`Hello! ${req.user.displayName} Welcome To Write Tingz`)
})

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });
  
  app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });
    
  
app.get("/not-found", (req, res) => {
    res.status(404).json({ error: "page does not exist" });
});
  
app.get("*", (req, res) => {
    res.redirect("/not-found");
});

// EXPORT
module.exports = app;

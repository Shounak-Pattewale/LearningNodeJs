const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));

// Imports
const userController = require("./controller/userControler")
// const user = userController.getUserController()

// Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page
app.get('/',(req, res) => {
    // res.send("Home Page..!!")
    res.render('home')
})

app.get("/user", userController.getUser);

// Endpoint not defined
app.get('*',(req, res)=> {
    res.send("UNKNOWN URL..!!!")
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})


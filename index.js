const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const userController = require("./controller/userControler");

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));


// Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page
app.get('/',(req, res) => {
    // res.send("Home Page..!!")
    res.render('home')
})

app.get("/user", userController.getUser);
app.post("/user", userController.saveUser);

// Endpoint not defined
app.get('*',(req, res)=> {
    res.send("UNKNOWN URL..!!!")
})

app.listen(8084, () => {
    console.log("Listening on port 8084 index!")
})

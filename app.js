const express = require("express");
var router = express.Router();
const path = require('path');
const bodyParser = require("body-parser");

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));

// Imports
const userController = require("./controller/userControler")
const user = userController.getUserController()

// Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


router.post(path:"/user",)

// Home Page
app.get('/',(req, res) => {
    // res.send("Home Page..!!")
    res.render('home')
})

// User Profile
// app.get('/user',(req, res)=> {
//     // const user = req.body;
//     res.send("GET REQUEST : /user ")
// })

app.post('/user',(req, res)=> {
    res.send("POST REQUEST : /user")
    console.log(req.body);
    res.sendStatus(200);
})

app.get('/u/:user_id',(req, res) => {
    // console.log(req.params.sub);
    const { user_id } = req.params;
    for(let u of user){
        if (user_id == u.id){
            console.log(u);
        }
    }
    res.send(`<h1> This is the user id : <i>${user_id}</i></h1>`)
})

// Search User
app.get('/search',(req, res) => {
    const { u } = req.query;
    res.send(`<h1> Query String : ${ u } </h1>`)
})

// Endpoint not defined
app.get('*',(req, res)=> {
    res.send("UNKNOWN URL..!!!")
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})


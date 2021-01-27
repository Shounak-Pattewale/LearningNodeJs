// const userModel = require("../models/userModel")
const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');

function User() {
    let user = [];
    user.push({id: 10, name: "User 1", password:"123"});
    user.push({id: 20, name: "User 2", password:"123"});
    user.push({id: 33, name: "User 3", password:"123"});
    user.push({id: 44, name: "User 4", password:"123"});
    return user;
}


exports.getUser = (req, res) => {
    const user = User();
    console.log(user);
    return res.status(200).json(user);
    // res.json({ user });
}

exports.saveUser = (req, res) => {
    let message = "the user will be done ";
    // const user = userModel.getUsers();
    const user = User();
    return res.status(200).json({"user": user, "message": message});
    // res.json({ user });
}

exports.findUser = [
    body("name").isLength({min:1}).trim().withMessage("Name required"),
    body("password").isLength({min:2}).trim().withMessage("Password required"),
    (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            else {
                const user = User();
                const name = req.body.name;
                const password = req.body.password;
                
                for(let u of user) {
                    if( name === u.name && password === u.password){
                        console.log(u.name)
                        console.log(u.password)
                    }
                }
                return res.status(200).json({"user": user});
            }
        } catch (error) {
            const message = "Error at /finduser";
            return res.status(400).json({"Error":error,"Message":message});
        }
        
        
}]
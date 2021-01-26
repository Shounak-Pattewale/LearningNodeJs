// const userModel = require("../models/userModel")

exports.getUser = (req, res) => {
    let user = [];
    user.push({name: "User 1", id: 10});
    user.push({name: "User 2", id: 20});
    user.push({name: "User 3", id: 33});
    user.push({name: "User 4", id: 44});
    // const user = userModel.getUsers();

    return res.status(200).json(user);
    // res.json({ user });
}

exports.saveUser = (req, res) => {
    let message = "the user will be done ";
    let user = [];
    user.push({name: "User 1", id: 10});
    user.push({name: "User 2", id: 20});
    user.push({name: "User 3", id: 33});
    user.push({name: "User 4", id: 44});
    // const user = userModel.getUsers();

    return res.status(200).json({"user": user, "message": message});
    // res.json({ user });
}
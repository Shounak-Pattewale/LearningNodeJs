// const userModel = require("../models/userModel")

exports.getUser = (req, res) => {
    let user = [];
    user.push({name:"Sp", id:20});
    // const user = userModel.getUsers();

    return user;
    // res.json({ user });
}

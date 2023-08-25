const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const newUser = require('./mongo/user-data')

//middleware
app.use(cors());
app.use(express.json());

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/registered-users');


app.post("/register", async (req, res) => {
    try{
        await newUser.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.json({status: 'ok'});
    }
    catch(err){
        console.log(err);
        res.json({status: 'error', error: 'Account already exists'});
    }
});


app.post("/login", async (req, res) => {
    const user = await newUser.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    res.json({status: 'ok'});

    if (user) {
        return res.json({status: "ok", user: true});
    }
    else {
        return res.json({status: "error", user: false});
    }
});


app.listen(5000, () => {
    console.log("Server started on port 5000");
})
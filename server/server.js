const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const newUser = require('./mongo/user-data')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//middleware
app.use(cors());
app.use(express.json());

//connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/registered-users');


app.post("/api/register", async (req, res) => {
    try{
        const encryptedPass = await bcrypt.hash(req.body.password, 10);
        await newUser.create({
            username: req.body.username,
            email: req.body.email,
            password: encryptedPass,
        });
        res.json({status: 'ok'});
    }
    catch(err){
        console.log(err);
        res.json({status: 'error', error: 'Account already exists'});
    }
});


app.post("/api/login", async (req, res) => {
    const user = await newUser.findOne({
        email: req.body.email,
    })

    //if user doesn't exist
    if(!user){
        return res.json({status: "error", user: false});
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    //if password is valid, else invalid
    if (isPasswordValid) {

        //authentication token for successful login
        const token = jwt.sign(
        {
            username: user.username,
            email: user.email,
        },
        'secret123'
        )

        return res.json({status: "ok", user: token});
    }
    else {
        return res.json({status: "error", user: false});
    }
});

app.post("/api/token-confirmation", async (req, res) => {
    const user = jwt.decode(req.body.token);
    return res.json({username: user.username});
})


app.listen(5000, () => {
    console.log("Server started on port 5000");
})
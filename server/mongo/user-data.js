const mongoose = require("mongoose");

const newUser = new mongoose.Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        quote: {type: String}
    },
    {
        collection: 'user-data'
    }
);

const model = mongoose.model('UserData', newUser);

module.exports = model;
const mongoose = require('mongoose');

const superKick = new mongoose.Schema({
    brand: {
        type: String
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    details: {
        type: String
    },
    price: {
        type: String
    },
    gender: {
        type: String
    },
    size: [String],
    color: {
        type: String
    },
    category: {
        type: String
    },
    image: [String],

})
module.exports.superkick = new mongoose.model("superkick", superKick)
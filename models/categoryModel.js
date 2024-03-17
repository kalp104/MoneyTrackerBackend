const mongoose = require('mongoose');

const category = new mongoose.mongoose.Schema({
    type: {
        type:String,
        default:"Investment",
    },
    color: {
        type: String,
        default: '#FCBE44',
    }
})

module.exports = mongoose.model("category", category);
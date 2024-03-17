const mongoose = require("mongoose");

const transactionModel = new mongoose.Schema({
    name1: {
        type: String,
        default: "Anonymous",
    },
    type: {
        type : String,
        default: "Investment",
    },
    amount: {
        type : Number,
    },
    createdAt:{ 
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("transaction", transactionModel);
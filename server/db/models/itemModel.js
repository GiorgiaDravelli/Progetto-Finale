const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    category:{
        type: String,
        // required: true
    },
    image: { 
        data: Buffer,
        type: String 
    },
    price: {
        type: Number,
        // required: true
    },
    // date_added: {
    //     type: Date,
    //     default: Date.now
    // },
});

module.exports = mongoose.model.Items || mongoose.model("Items", ItemSchema);
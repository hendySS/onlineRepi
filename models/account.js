const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({

    nama:{
        type: String,
        required: [true, "Must fill this"],
        unique: true
    }


})

module.export = mongoose.model('users', accountSchema);
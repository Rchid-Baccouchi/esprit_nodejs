const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    Title : String,
    Author : String,
    Type : String,
    Price: Number,
},{timestamps: true})







module.exports = mongoose.model('books',BookSchema);
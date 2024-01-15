// Require the Mongoose package
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    username: {type: String, required: true},
    
});

module.exports = reviewSchema;
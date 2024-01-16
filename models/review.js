// Require the Mongoose package
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    comment: {type: String, required: true},
    commentDate: {type: Date, default: Date.now}
});

module.exports = reviewSchema;
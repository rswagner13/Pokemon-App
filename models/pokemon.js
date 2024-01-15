// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review.js')

const pkmnSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    ability: {type: String, required: true},
    photo: {type: String, required: true},
    region: {type: String, required: true},
    baseHP: {type: Number, default: 40},
    baseATT: {type: Number, default: 40},
    baseDEF: {type: Number, default: 40},
    baseSPATT: {type: Number, default: 40},
    baseSPDEF: {type: Number, default: 40},
    baseSPD: {type: Number, default: 40},
    reviews: [reviewSchema]
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Pokemon', pkmnSchema);
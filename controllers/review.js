/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/review`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require('express');
// Router allows us to handle routing outisde of server.js
const router = express.Router();

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models');
const reviewSchema = require('../models/review');


/* Routes
---------------------------------------------------------------- */
// GET route to render all reviews onto one page
router.get('/', (req, res) => {
    db.Pokemon.find({}, {reviews: true, _id: false})
        .then(pokemon => {
            const reviewList=[];
            for(let pkmn of pokemon) {
                reviewList.push(...pkmn.reviews)
            }
            res.render('reviews-home', {reviews: reviewList})
        })
});

// GET route to render form to fill out a new review for a Pokemon
router.get('/new/:pokemonId', (req,res) => {
    db.Pokemon.findById(req.params.pokemonId)
        .then(pokemon => res.render('new-review', {pokemon:pokemon}))
});


// POST route to add the review to the Pokemon document base on it's Object id
router.post('/create/:pokemonId', (req,res) => {
    db.Pokemon.findByIdAndUpdate(req.params.pokemonId, {$push: {reviews: req.body}},{new:true})
        .then(pokemon => res.redirect('/review'))
});

router.delete('/:id', (req,res) => {
    db.Pokemon.findOneAndUpdate(
        {'reviews._id': req.params.id}, 
        { $pull: {reviews: {_id: req.params.id}}},
        {new: true}
        )
        .then(pokemon => res.redirect('/review'))
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
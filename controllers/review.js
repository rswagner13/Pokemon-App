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


/* Routes
---------------------------------------------------------------- */
router.get('/', (req, res) => {
    res.send("Reviews Page will be here")
});

router.get('/new/:pokemonId', (req,res) => {
    db.Pokemon.findById(req.params.pokemonId)
        .then(pokemon => res.render('new-review', {pokemon:pokemon}))
});

router.post('/create/:pokemonId', (req,res) => {
    db.Pokemon.findByIdAndUpdate(req.params.pokemonId, {$push: {reviews: req.body}},{new:true})
        .then(pokemon => res.redirect('/review'))
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
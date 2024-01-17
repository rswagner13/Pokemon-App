/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/pokemon`
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
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all pets
router.get('/', (req,res) => {
    db.Pokemon.find({})
    .then(pokemon => {
        res.render('pokemon-home',  {
            pokemon: pokemon
        })
    })
});

// Create Route (POST/Create): This route will display the json data of the new Pokemon that was added
router.post('/', (req, res) => {
    db.Pokemon.create(req.body)
        .then(pokemon => res.redirect('/pokemon/' + pokemon.id))
});

// New Route (GET/Read): This route will show that the use is able to access the page that will contain a form for a new Pokemon
router.get('/new', (req, res) => {
    res.render('new-pokemon')
});

// Show route (GET/Read): This route will display an individual pokemon document
// using the URL parameter
router.get('/:id', (req, res) => {
    db.Pokemon.findById(req.params.id)
        .then(pokemon => {
            res.render('pokemon-details', {pokemon: pokemon});
        })
});

// Update route (PUT/Update): This route receives the Put requrest sent from the edit route
// edits a specific pokemon document using form data, and will send json data back
// showing the edits were made
router.put('/:id', (req, res) => {
    db.Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(pokemon => res.json(pokemon))
});

// Destroy Route (DELETE/Delete): This route deletes a pokemon document using the 
// URL parameter (which is the pokemon's document ID)
router.delete('/:id', (req, res) => {
    db.Pokemon.findByIdAndDelete(req.params.id)
        .then(res.redirect('/pokemon'))
})

// Edit Route (GET/Read): This route renders a form the user
// will use to PUT (edit) properties of an existing pokemon



/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
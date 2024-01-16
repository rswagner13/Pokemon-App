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

router.get('/', (req,res) => {
    db.Pokemon.find({})
    .then(pokemon => {
        res.render('pokemon-home',  {
            pokemon: pokemon
        })
    })
})
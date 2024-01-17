/* Require modules
--------------------------------------------------------------- */
require('dotenv').config();
const path = require('path');
const express = require('express');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const methodOverride = require('method-override');


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');



/* Require the routes in the controllers folder
--------------------------------------------------------------------- */
const pkmnCtrl = require('./controllers/pokemon');
// const reviewCtrl = require('./controllers/review');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(connectLiveReload());
// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));

/* Mount routes
-------------------------------------------------------------- */
app.get('/', function (req, res) {
    db.Pokemon.find({})
        .then(pokemon => {res.render('home', {pokemon: pokemon})})
});


// When a GET request is sent to `/seed`, the pets collection is seeded
app.get('/seed', function (req, res) {
    // Remove any existing pets
    db.Pokemon.deleteMany({})
        .then(removePkmn => {
            console.log(`Removed ${removePkmn.deletedCount} pokemon`)
            // Seed the pets collection with the seed data
            db.Pokemon.insertMany(db.seedPokemon)
                .then(addedPkmn => {
                    console.log(`Added ${addedPkmn.length} pokemon to be added to database`)
                    res.json(addedPkmn)
                })
        })
});

// // This tells our app to look at the `controllers/pokemon.js` file 
// // to handle all routes that begin with `localhost:3000/pokemon`
app.use('/pokemon', pkmnCtrl);
// // This tells our app to look at the `controllers/review.js` file 
// // to handle all routes that begin with `localhost:3000/review`
// app.use('/review', reviewCtrl);


// The "catch-all" route: Runs for any other URL that doesn't match the above routes
// app.get('*', function (req, res) {
//     res.render('404')
// });

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
const express = require('express');
const mongoose = require('mongoose');
const gameRouter = require('./routes/games');
const Game = require('./models/game');
const methodOverride = require('method-override');
const app = express();

mongoose.connect('mongodb://localhost/league', {
    useNewUrlParser: true, useUnifiedTopology: true
});

app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/games', gameRouter);

app.get('/', async (req, res) => {
    const game = await Game.find();
    res.render('games/index', {game: game})
});

app.listen(3000)
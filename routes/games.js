const express = require('express');
const Game = require("./../models/game");
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('games/new', {game: new Game()})
});

router.get('/:id', async (req, res) => {
    const game = await Game.findById(req.params.id);
    if (game == null) res.redirect('/');
    res.render('games/show', {game: game});
});

router.post('/', async (req, res) => {
   let game = new Game({
       status: req.body.status,
       champion: req.body.champion,
       level: req.body.level,
       kda: req.body.kda,
       creeperScore: req.body.creeperScore,
       goldAcquired: req.body.goldAcquired,
       notes: req.body.notes
   });
   try{
        game = await game.save();
        res.redirect(`/games/${game.id}`);
   } catch (e) {
        console.log(e)
        res.render('games/new', {game: game});
   }
});


router.delete('/:id', async (req,res) => {
    await Game.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router
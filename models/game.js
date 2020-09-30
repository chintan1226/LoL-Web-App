const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    status: {
        required: true,
        type: String
    },
    champion: {
        required: true,
        type: String
    },
    level: {
        required: true,
        type: Number
    },
    kda: {
        required: true,
        type: String
    },
    creeperScore: {
        required: true,
        type: Number
    },
    goldAcquired: {
        required: true,
        type: Number
    },
    notes: {
        type:String
    }
});

module.exports = mongoose.model('Game', GameSchema);
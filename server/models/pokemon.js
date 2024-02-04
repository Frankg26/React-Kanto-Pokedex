const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    dexNum: Number,
    name: String,
    typeOne: String,
    typeTwo: String,
    picture: String
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
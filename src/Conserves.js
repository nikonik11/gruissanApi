const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const conserveShema = new Schema ({
    nom: String,
    poids: Number,
    prix: Number
});

const conserve = mongoose.model('conserve', conserveShema);

module.exports = conserve;


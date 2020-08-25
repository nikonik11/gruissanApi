const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LivresSchema = new Schema({
    title: String
})

const Livres = mongoose.model('Livres', LivresSchema);

module.exports = Livres;
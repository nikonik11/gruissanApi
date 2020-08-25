const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/gruissan_test', {
        useMongoClient: true
    });

    mongoose.connection
        .once('open', () => {
            console.log('la connexion est établi'); done()
        })
        .on('erreur', (error) => {
            console.warn('Erreur lors de la connexion', error)
        })
})

beforeEach('Supprime les anciens livres', (done) => {
//  const Livres = mongoose.connection.collection.Livres;
// je peux aussi l'ecire comme ceci ci l'objet que je vais chercher en collection a le meme nom que ma constante
    const{livres} = mongoose.connection.collections;
    livres.drop( () => {
        done();
    })
})
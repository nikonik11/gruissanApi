const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gruissan_test',{
	useMongoClient:true
});

mongoose.connection
    .once('open', () => {
        console.log ('la connexion est établi')
    })
    .on('erreur',(error) => {
        console.warn('Erreur lors de la connexion', error)
    })
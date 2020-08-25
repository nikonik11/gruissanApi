/* const assert = require('assert');         // permet de faire des tests de comparaison sur nos variables
const Livre = require('../src/livres');   // je récupere mon modele Livre

describe('Test de create', () => {        // Je donne a mon test un intitulé
    it('sauvegarde dun livre', () => {    // ensemble de tous les test que l'on va réaliser independamment, commence par IT
        const premierLivre = new Livre({title: 'Harry Potter'});  // je crée mon instance de livre
        premierLivre.save();              // je sauvegarde avec save() qui est une fonction de mongoose qui va la save direct dans la bddd
    })
})

describe('creation de livre', () => {    
    it('sauvegarde dun livre', (done) => {   
        const premierLivre = new Livre({title: 'Harry Potter'}); 
        premierLivre.save().then( () => {
            assert(!premierLivre.isNew);
            done();
        });         
    })
}) */

const assert = require('assert');
const conserve = require ('../src/Conserves');

describe('création de livre', () => {
    it('sauvegarder un livre en bdd', () => {
        const conserve1 = new conserve({
            nom: 'foie gras',
            poids: 250,
            prix: 25
        });
        conserve1.save();
    })
})
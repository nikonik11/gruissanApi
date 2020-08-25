const assert = require('assert');         
const Livre = require('../src/livres')

describe('test de read', () => {    
        let livre1;
    beforeEach( (done) => {
        livre1 = new Livre({title: 'millenium'})
        livre1.save().then( () => {
            done();
        })
    })
    it('recherche de livre par son titre', (done) => {   
        Livre.find({title:'millenium'}).then((livres) => {
            console.log(books[0]);
            done();
        })
    })
 
    it('recherche de livre par son id', () => {

    })
})
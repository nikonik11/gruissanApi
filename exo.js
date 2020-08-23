const validator = require('validator');

const isEmail = validator.isEmail (
    'caracacus@sfr.fr',
    'caracaquette@fffr.fr',
    'saltimbus',
    'testemaniac@gmc.fr',
    'cestlouper'
);

console.log(isEmail);
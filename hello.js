const validator = require ('validator');

const isEmail = validator.isEmail('caracaca@sde.fr');

console.log(isEmail);
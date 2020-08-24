const validator = require('validator');

let myTab = new Array('caracacus@sfr.fr','caracaquette@dfr.fr','saltimbus','testemaniac@gmc.fr','cestlouper');

for (let i = 0;i < myTab.length; i++){
    if(validator.isEmail(myTab[i])) {
        console.log(myTab[i] + ' :ok');
    }
    else {
        console.log(myTab[i] + ' :ko');
    }
};
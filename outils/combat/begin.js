"use strict";
function whobegin(pokemon1, pokemon2){

    if (pokemon1.speed > pokemon2.speed) return pokemon1;
    return pokemon2;
}

module.exports = whobegin;
"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(_nom, _speed, _life, _attaque) {
        this.nom = _nom;
        this.speed = _speed
        this.life = _life;
        this.attaque = _attaque;
        console.log("creation du pokemon ",this.nom);
    }
    return Pokemon;
}());

Pokemon.prototype.beat= function(pokemon)
{
    console.log("le pokemon ", this.nom, "attaque ", pokemon.nom);
    pokemon.life = pokemon.life - this.attaque;
    return pokemon;
}

Pokemon.prototype.death = function () {
    
    if (this.life > 0) return false;
    return true;
}
exports.Pokemon = Pokemon;


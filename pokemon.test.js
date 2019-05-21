"use strict";

var pokemon = require("./pokemon");
var begin = require('./outils/combat/begin');
var pikachu = new pokemon.Pokemon("Pikachu", 55, 50, 1);
var carapuce = new pokemon.Pokemon("Carapuce", 52, 60, 6);
var toto = new pokemon.Pokemon("Carapuce", 52, 0, 6);

describe('first to attack', function () {
    it('Pikachu devrai attaquer en premier', function () {
        expect(begin(pikachu, carapuce)).toBe(pikachu);
    });
});
describe(' attaque et devrait retirer des poins de vies', function () {
    it('Pikachu attaque carapuce et devrait retirer un point de vie à carapuce', function () {
        carapuce = pikachu.beat(carapuce);
        expect(carapuce.life).toBe(59);
    });
});

describe('si pokemon mort ', function () {
    it('toto est est mort', function () {
        
        expect(toto.death()).toBe(true);
    });
});

describe('si pokemon n est pas mort ', function () {
    it('pikachu n est pas mort', function () {

        expect(pikachu.death()).toBe(false);
    });
});
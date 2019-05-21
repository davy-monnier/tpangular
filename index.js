
const begin = require('./outils/combat/begin');
const Pokemon = require('./pokemon');

poke1 = new Pokemon.Pokemon("toto", 50,50,3);
poke2 = new Pokemon.Pokemon("billy", 60,60,7);

premierCombattant = begin(poke1, poke2);

if (premierCombattant.nom == poke1.nom) secondcombatant = poke2;
else secondcombatant = poke1;
console.log("premier combatant:", premierCombattant);


sortir = 0;
i = 0;

while (sortir == 0) {
    if (i % 2 == 0) {
        secondcombatant = premierCombattant.beat(secondcombatant);
        
        if (secondcombatant.death()) {
            gagnant = premierCombattant;
            sortir = 1;
            

        }
    } else {
        premierCombattant = secondcombatant.beat(premierCombattant);
        
        if (premierCombattant.death()) {
            gagnant = secondcombatant;
            sortir = 1;
            
        }
    }
    i = i+1;
}


console.log("le grand gagnant est ", gagnant);

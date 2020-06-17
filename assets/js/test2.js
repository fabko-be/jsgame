// function perimrec(long, larg){
//     return (long + larg) *2
// }

// console.log(perimrec(10, 5));


let p1 = [
    {
name: "fab",
maxHealth: 100,
startHealth: 100,
currentHealth: 100,
maxDamage: 20,
maxHealing: 30,
damageTaken: 0.8,
reflectChance: 0,
lifeSteal: 0,
item:"",
dodgeChance: 0,
bonusHeal: 0,
bonusDamage: 0,
attackTwiceChance: 0,
}
]

let p2 = [
    {
name: "Mik",
maxHealth: 100,
startHealth: 100,
currentHealth: 100,
maxDamage: 20,
maxHealing: 30,
damageTaken: 0.8,
reflectChance: 0,
lifeSteal: 0,
item:"",
dodgeChance: 0,
bonusHeal: 0,
bonusDamage: 0,
attackTwiceChance: 0,
}
]

let itemChosenp1 = "sword";

function attack(attacker, defender){

    if(attacker.lifeSteal > 0){
        defender.currentHealth -= Math.floor(defender.currentHealth/10)
    }
    let damage = getRandomAttack(0,20);

    function getRandomAttack(min, max){
        min = 1;
        max = attacker.maxDamage;
        //Retourne un entier entre min (inclus) et max (inclus)...
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    switch (attacker.item){
        case "boots" :
    
    }



    defender.currentHealth -= damage;

    return defender.currentHealth;

}

function heal(){
    return Math.floor(Math.random() * 31);
}

let dice = Math.floor(Math.random() * 2);
let turn = 0

console.log(dice)

function firstTurn(){
    Math.floor(Math.random() * 2);
}

console.log(attack(p2[0],p1[0]))
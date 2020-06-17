// function perimrec(long, larg){
//     return (long + larg) *2
// }

// console.log(perimrec(10, 5));


let p1 = [
    {
        name: "fab",
        race : "orc",
        maxHealth: 140,
        startHealth: 140,
        currentHealth: 20,
        maxDamage: 20,
        maxHealing: 30,
        damageTaken: 0.8,
        reflectChance: 0,
        lifeSteal: 0,
        item: "staff",
        dodgeChance: 0,
        bonusHeal: 0,
        bonusDamage: 0,
        attackTwiceChance: 0,
}
];

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
];

let turn = 0;


function randomIntGen(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function start(){
    let chance = randomIntGen(1, 2)

    if (chance == 1){
        document.getElementById("fightbuttonp2").style.display = "none";
    } else {
        document.getElementById("fightbuttonp1").style.display = "none";
    }
    turn = 1;
}

document.getElementById("start").addEventListener("click", () => {
    start();
});


// if (start() == 1){
//     document.getElementById("fightbuttonp2").style.display = "none";
// } else {
//     document.getElementById("fightbuttonp1").style.display = "none";
// }






function heal(attacker, defender){


     
    
    let heals = randomIntGen(1, 30) + Math.floor((randomIntGen(1, 30)*attacker.bonusHeal));

    attacker.currentHealth += heals;

    if(attacker.currentHealth > attacker.maxHealth){
        attacker.currentHealth = attacker.maxHealth;
    }
    
    if (attacker = p1[0]){
    document.getElementById("hpp1").style.width = (attacker.currentHealth/attacker.maxHealth)
    document.getElementById("hpp1").innerHTML = (attacker.currentHealth/attacker.maxHealth) + "%"
    } else {
    document.getElementById("hpp2").style.width = (attacker.currentHealth/attacker.maxHealth)
    document.getElementById("hpp1").innerHTML = (attacker.currentHealth/attacker.maxHealth) + "%"
    }

    textLog(`${attacker.name} heals himself for ${heals}. He has now ${attacker.currentHealth}HP.`)

    return attacker.currentHealth;
}

// document.getElementById("test").addEventListener("click", () => {
//     console.log(heal(p1[0],p2[0]))
// });








// function heal(){
//     return Math.floor(Math.random() * 31);
// }

// let dice = Math.floor(Math.random() * 2);
// let turn = 0

// console.log(dice)

// function firstTurn(){
//     Math.floor(Math.random() * 2);
// }

// console.log(attack(p2[0],p1[0]))
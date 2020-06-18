
let p1 = [{
    currentHealth: 80,
    maxHealth: 100,
    damage : 15
}]

let p2 = [{
    currentHealth : 60,
    maxHealth : 100,
    damage:15
}]

let attacker = [{
    currentHealth: 80,
    maxHealth: 100,
    damage : 15
}]

let defender = [{
    currentHealth : 60,
    maxHealth : 100,
    damage:15
}]

let damage = 15;
let attack = defender.currentHealth - attacker.damage;



// function vampLife (){

//     if (p1[0].currentHealth + p2[0].currentHealth/10 > p1[0].maxHealth ) {
//         p1[0].currentHealth = 100
//     } else { 
//         p1[0].currentHealth += p2[0].currentHealth/10
//     };
// };

// vampLife();
// console.log(p1[0].currentHealth);

function randomIntGen(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// when ennemy attacks -> check boots, check elf, check human

// Fonction attack -------------------------------------

function attack(attacker,defender){

    damage = randomIntGen(1, 20) + Math.floor((randomIntGen(1, 20)*attacker.bonusDamage));

    if (defender.item=="boots"){

        dodgeChance(attacker,defender);
    };

    if (defender.race == "elf") {

        counter(attacker, defender);
    };

    defender.currentHealth -= damage;

    textLog(`${attacker.name} hit ${defender.name} and put him ${damage} HP damage.`)

    return defender.currentHealth;

    
    
};

function counter(attacker, defender) {

     backhit = Math.floor(Math.random() * (100));

        if (backhit <=29) {

            damage = Math.round(damage/2);
            attacker.currentHealth -= damage;

            textLog(`${defender.name} counter the hit from ${attacker.name} and put him ${damage} HP damage.`)

            damage=0;
        } 
}

function dodgeChance(attacker, defender){
    
    let dodge = Math.floor(Math.random() * (100));

        if (dodge <= 29) {

            damage = 0;

            textLog(`${defender.name} dodge the attack from ${attacker.name} ! Maybe next time...`)
        
        } else {
            textLog(`${defender.name} can't dodge the attack from ${attacker.name}. Damn it ! `)
        }
        
};

// win & loose


let humans =
{
    name : "",
    race : "human",
    maxHealth: 100,
    startHealth: 100,
    currentHealth: 100,
    maxDamage: 20,
    maxHealing: 30,
    damageTaken: 0.8,
    reflectChance: 0,
    lifeSteal: 0,
    item: "",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}
let orcs =
{
    name: "",
    race: "orc",
    maxHealth: 140,
    startHealth: 140,
    currentHealth : 140,
    maxDamage: 20,
    maxHealing: 30,
    damageTaken: 1,
    reflectChance: 0,
    lifeSteal: 0,
    item: "",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}
let elfs = 
{
    name : "",
    race : "elf",
    maxHealth : 100,
	startHealth : 100,
    currentHealth : 100,
    maxDamage : 20,
	maxHealing : 30,
	damageTaken : 1,
	reflectChance : 0.3,
    lifeSteal : 0,
    item: "",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}
let vampires =
{
    name : "",
    race : "vampire",
    maxHealth : 100,
	startHealth : 100,
    currentHealth : 100,
    maxDamage : 20,
	maxHealing : 30,
	damageTaken : 1,
	reflectChance : 0,
    lifeSteal : 0.1,
    item: "",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
};

let p1 = new Object();
let p2 = new Object();

// Début de la création du P1
document.getElementById("rhum1").addEventListener("click", () => {
    p1 = {...humans};
});
document.getElementById("rorc1").addEventListener("click", () => {
    p1 = {...orcs};
});
document.getElementById("relf1").addEventListener("click", () => {
    p1 = {...elfs};
});
document.getElementById("rvamp1").addEventListener("click", () => {
    p1 = {...vampires}
});

document.getElementById("bootsp1").addEventListener("click", () => {
    p1.item = "boots";
});
document.getElementById("staffp1").addEventListener("click", () => {
    p1.item = "staff";
});
document.getElementById("swordp1").addEventListener("click", () => {
    p1.item = "sword";
});
document.getElementById("bowp1").addEventListener("click", () => {
    p1.item = "bow";
});
// Fin de la création du P1

// Début création P2

document.getElementById("rhum2").addEventListener("click", () => {
    p2 = {...humans};
});
document.getElementById("rorc2").addEventListener("click", () => {
    p2 = {...orcs};
});
document.getElementById("relf2").addEventListener("click", () => {
    p2 = {...elfs};
});
document.getElementById("rvamp2").addEventListener("click", () => {
    p2 = {...vampires};
});

document.getElementById("bootsp2").addEventListener("click", () => {
    p2.item = "boots";
});
document.getElementById("staffp2").addEventListener("click", () => {
    p2.item = "staff";
});
document.getElementById("swordp2").addEventListener("click", () => {
    p2.item = "sword";
});
document.getElementById("bowp2").addEventListener("click", () => {
    p2.item = "bow";
});


function checkCreation(player1, player2){
    
    if (player1.name == "" || player1.race == null || player1.item == "" || player2.name == "" || player2.race == null || player2.item == ""){
        alert("All fields are required !")
    } else {
        playerProfil()
        item(p1);
        item(p2);
        document.getElementById("cp1name").innerHTML = (p1.name);
        document.getElementById("cp2name").innerHTML = (p2.name);
        document.getElementById("fightscreen").style.display = "none";
        document.getElementById("combatlog").style.display = "block";
        document.getElementById("hpp1").innerHTML = "100%";
        document.getElementById("hpp2").innerHTML = "100%";
        textLog(`Player 1 name is ${p1.name} and he is playing the race of ${p1.race} equiped with : ${p1.item}.`);
        textLog(`Player 2 name is ${p2.name} and he is playing the race of ${p2.race} equiped with : ${p2.item}.`)
        start();
    }
}
// fin création P2
// Fonction pour généré un entier positif entre min et max (inclus)
function randomIntGen(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Random décision pour le joueur qui commence
function start(){
    let chance = randomIntGen(1, 2)

    if (chance == 1){
        document.getElementById("fightbuttonp2").style.display = "none";
    } else {
        document.getElementById("fightbuttonp1").style.display = "none";
    }
}
// Fonction qui ajoute les multiplicateurs au joueur en fonction de l'item sélectionné
function item(player){
    switch(player.item){
        case "boots":
            player.dodgeChance = 0.3;
            break;
        case "staff":
            player.bonusHeal = 0.2;
            break;
        case "sword":
            player.bonusDamage = 0.3;
            break;
        case "bow":
            player.attackTwiceChance = 0.3;
            break;
    }
}
// Fonction pour sélectionner l'image de profil de l'écran de combat
function playerProfil(){
    switch (p1.race) {
        case "human":
            document.getElementById("imgpp1").src = "../images/humanp.png";
            break;
        case "orc":
            document.getElementById("imgpp1").src = "../images/orcp.png";
            break;
        case "elf":
            document.getElementById("imgpp1").src = "../images/elfp.png";
            break;
        case "vampire":
            document.getElementById("imgpp1").src = "../images/vampp.png";
            break;
        default :
}
    switch (p2.race) {
        case "human":
            document.getElementById("imgpp2").src = "../images/humanp.png";
            break;
        case "orc":
            document.getElementById("imgpp2").src = "../images/orcp.png";
            break;
        case "elf":
            document.getElementById("imgpp2").src = "../images/elfp.png";
            break;
        case "vampire":
            document.getElementById("imgpp2").src = "../images/vampp.png";
            break;
        default :

}
}
// Fonction pour généré le textLog du combat
function textLog(text){
    return document.getElementById("textlog").innerHTML += text + "<br>";
}
document.getElementById("start").addEventListener("click", () => {
    p1.name = (document.getElementById("p1name").value);
    p2.name = (document.getElementById("p2name").value);
    checkCreation(p1,p2);
});
// Fonction Heal standard
function heal(attacker,defender){

    let heals = randomIntGen(1, 30) + Math.floor((randomIntGen(1, 30)*attacker.bonusHeal));

    attacker.currentHealth += heals;

    if(attacker.currentHealth > attacker.maxHealth){
        let depasse = heals - (attacker.currentHealth - attacker.maxHealth)
        attacker.currentHealth = attacker.maxHealth;
        textLog(`${attacker.name} can't heal himself more than 100% HP. ${depasse}HP gained.`)
    } else {

    textLog(`${attacker.name} heals himself for ${heals}. He has now ${attacker.currentHealth}HP.`)}
    vampireCheck(attacker,defender)
    if(attacker.currentHealth <= 0){
        attacker.currentHealth = 0;
    }
    if(defender.currentHealth <= 0){
        defender.currentHealth = 0;
    }
    return attacker.currentHealth;

}
// Si l'ennemi est un vampire (en cas de tour passer ou d'attaque)
function vampireCheck(attacker, defender){
    if (defender.lifeSteal != 0){

        let stolenLife;
        if(attacker.currentHealth >= 5){
        stolenLife = Math.round((attacker.currentHealth)*defender.lifeSteal);
        attacker.currentHealth -= stolenLife;
        defender.currentHealth += stolenLife;
    }   else {
        stolenLife = Math.ceil((attacker.currentHealth)*defender.lifeSteal);
        attacker.currentHealth -= stolenLife;
        defender.currentHealth += stolenLife;
    }


        if(defender.currentHealth > defender.maxHealth){
            defender.currentHealth = defender.maxHealth;
        
        textLog(`${defender.name} can't steal more from ${attacker.name} but cause ${stolenLife} damage to him.`)
        }else{
            textLog(`${defender.name} stole ${stolenLife} HP from ${attacker.name}.`)
        }
    }
    return attacker.currentHealth;
}

function hpUpdate(){
    document.getElementById("hpp1").style.width = (p1.currentHealth/p1.maxHealth)*100 + "%";
    document.getElementById("hpp1").innerHTML = Math.floor((p1.currentHealth/p1.maxHealth)*100) + "%";
    document.getElementById("hpp2").style.width = (p2.currentHealth/p2.maxHealth)*100 + "%";
    document.getElementById("hpp2").innerHTML = Math.floor((p2.currentHealth/p2.maxHealth)*100) + "%";
}


function attack(attacker, defender){
    damage = randomIntGen(1, 20) + Math.floor((randomIntGen(1, 20)*attacker.bonusDamage));
    
    switch(defender.race){
        case "human": 
        damage = Math.floor(damage *(defender.damageTaken));
        break;
        case "elf":
        counter(attacker, defender);
        break;
    }

    switch(defender.item){
        case "boots": 
        dodgeChance(attacker,defender);
        break;
    }

    switch(attacker.item){
        case "bow":
            attackTwice(attacker,defender)
            break;
    }

    // if (defender.item == "boots"){
    //     dodgeChance();
    // }
        defender.currentHealth -= damage
        textLog(`${defender.name} take ${damage} damages.`)
        vampireCheck(attacker,defender)
        if(attacker.currentHealth <= 0){
            attacker.currentHealth = 0;
        }
        if(defender.currentHealth <= 0){
            defender.currentHealth = 0;
        }
        // winLose(attacker, defender);
    };

function dodgeChance(attacker,defender){
    let dodge = Math.floor(Math.random()* 100);

    if (dodge <= 29){
        damage = 0;
        textLog(`${defender.name} dodge the attack`)
    }
};

function attackTwice(attacker, defender){
    let twice = Math.floor(Math.random()* 100);

    if (twice <= 29){
        textLog(`The attack hits ${defender.name} twice ! Nice shot !`)
        damage *= 2
    }
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

function winLose(attacker,defender){
    if(attacker.currentHealth <= 0){
        attacker.currentHealth = 0;
        textLog(`${defender.name} win the fight !`)
        document.getElementById("fightbuttonp1").style.display = "none";
        document.getElementById("fightbuttonp2").style.display = "none";
    }
    if(defender.currentHealth <= 0){
        defender.currentHealth = 0;
        textLog(`${attacker.name} win the fight !`)
        document.getElementById("fightbuttonp1").style.display = "none";
        document.getElementById("fightbuttonp2").style.display = "none";
    }
}
// Deux eventlistener pour mettre à jour les barres de vies et lancer le heal
document.getElementById("p1heal").addEventListener("click",() => {
    heal(p1,p2);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "none";
    document.getElementById("fightbuttonp2").style.display = "flex";
    winLose(p1,p2)
});
document.getElementById("p2heal").addEventListener("click",() => {
    heal(p2,p1);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "flex";
    document.getElementById("fightbuttonp2").style.display = "none";
    winLose(p2,p1)
});
document.getElementById("p1pass").addEventListener("click",() => {
    vampireCheck(p1,p2)
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "none";
    document.getElementById("fightbuttonp2").style.display = "flex";
    winLose(p1,p2)
});
document.getElementById("p2pass").addEventListener("click",() => {
    vampireCheck(p2,p1)
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "flex";
    document.getElementById("fightbuttonp2").style.display = "none";
    winLose(p2,p1)
});

document.getElementById("p1attack").addEventListener("click",() => {
    attack(p1,p2);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "none";
    document.getElementById("fightbuttonp2").style.display = "flex";
    winLose(p1,p2)
});
document.getElementById("p2attack").addEventListener("click",() => {
    attack(p2,p1);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "flex";
    document.getElementById("fightbuttonp2").style.display = "none";
    winLose(p2,p1)
});
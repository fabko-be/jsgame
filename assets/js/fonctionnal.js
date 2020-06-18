    const races =[ 
        {
    name : "",
    race : "human",
    maxHealth: 100,
    startHealth: 100,
    currentHealth: 20,
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
},
        {
    name: "",
    race: "orc",
    maxHealth: 140,
    startHealth: 140,
    currentHealth : 20,
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
},
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
},
{
    name : "",
    race : "vampire",
    maxHealth : 100,
	startHealth : 100,
    currentHealth : 20,
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
}]

let p1 = [];
let p2 = [];

// Début de la création du P1
document.getElementById("rhum1").addEventListener("click", () => {
    p1[0] = races[0];
    console.log(p1[0].race)
});
document.getElementById("rorc1").addEventListener("click", () => {
    p1[0] = races[1];
    console.log(p1[0].race)
});
document.getElementById("relf1").addEventListener("click", () => {
    p1[0] = races[2];
    console.log(p1[0].race)
});
document.getElementById("rvamp1").addEventListener("click", () => {
    p1[0] = races[3];
    console.log(p1[0].race)
});

document.getElementById("bootsp1").addEventListener("click", () => {
    p1[0].item = "boots";
    console.log(p1[0].item)
});
document.getElementById("staffp1").addEventListener("click", () => {
    p1[0].item = "staff";
    console.log(p1[0].item)
});
document.getElementById("swordp1").addEventListener("click", () => {
    p1[0].item = "sword";
    console.log(p1[0].item)
});
document.getElementById("bowp1").addEventListener("click", () => {
    p1[0].item = "bow";
    console.log(p1[0].item)
});
// Fin de la création du P1

// Début création P2

document.getElementById("rhum2").addEventListener("click", () => {
    p2[0] = races[0];
    console.log(p2[0].race)
});
document.getElementById("rorc2").addEventListener("click", () => {
    p2[0] = races[1];
    console.log(p2[0].race)
});
document.getElementById("relf2").addEventListener("click", () => {
    p2[0] = races[2];
    console.log(p2[0].race)
});
document.getElementById("rvamp2").addEventListener("click", () => {
    p2[0] = races[3];
    console.log(p2[0].race)
});

document.getElementById("bootsp2").addEventListener("click", () => {
    p2[0].item = "boots";
    console.log(p2[0].item)
});
document.getElementById("staffp2").addEventListener("click", () => {
    p2[0].item = "staff";
    console.log(p2[0].item)
});
document.getElementById("swordp2").addEventListener("click", () => {
    p2[0].item = "sword";
    console.log(p2[0].item)
});
document.getElementById("bowp2").addEventListener("click", () => {
    p2[0].item = "bow";
    console.log(p2[0].item)
});

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
    turn = 1;
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
    switch (p1[0].race) {
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
    switch (p2[0].race) {
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
    console.log(p1[0]);
    console.log(p2[0]);
    p1[0].name = (document.getElementById("p1name").value);
    p2[0].name = (document.getElementById("p2name").value);
    console.log(p1);
    console.log(p2);
    console.log(`Player 1 name is ${p1[0].name} and he is playing the race of ${p1[0].race} equiped with : ${p1[0].item}`);
    console.log(`Player 2 name is ${p2[0].name} and he is playing the race of ${p2[0].race}.equiped with : ${p2[0].item}`);
    document.getElementById("cp1name").innerHTML = (p1[0].name);
    document.getElementById("cp2name").innerHTML = (p2[0].name);
    textLog(`Player 1 name is ${p1[0].name} and he is playing the race of ${p1[0].race} equiped with : ${p1[0].item}.`);
    textLog(`Player 2 name is ${p2[0].name} and he is playing the race of ${p2[0].race} equiped with : ${p2[0].item}.`)
    playerProfil()
    item(p1[0]);
    item(p2[0]);
    start();
});
// Fonction Heal standard
function heal(attacker,defender){

    let heals = randomIntGen(1, 30) + Math.floor((randomIntGen(1, 30)*attacker.bonusHeal));

    attacker.currentHealth += heals;

    if(attacker.currentHealth > attacker.maxHealth){
        attacker.currentHealth = attacker.maxHealth;
        textLog(`${attacker.name} can't heal himself more than this. HP on max.`)
    } else {

    textLog(`${attacker.name} heals himself for ${heals}. He has now ${attacker.currentHealth}HP.`)}

    if (defender.lifeSteal != 0){
        let stolenLife = Math.floor((attacker.currentHealth)*defender.lifeSteal);
        attacker.currentHealth -= stolenLife;
        defender.currentHealth += stolenLife;

        if(defender.currentHealth > defender.maxHealth){
            defender.currentHealth = defender.maxHealth;
        
        textLog(`${defender.name} can't steal more from ${attacker.name} but cause ${stolenLife} damage to him.`)
        }else{
            textLog(`${defender.name} stole ${stolenLife} HP from ${attacker.name}.`)
        }
    }

    return attacker.currentHealth;

}
// Si l'ennemi est un vampire (en cas de tour passer ou d'attaque)
function vampireCheck(attacker, defender){
    if (defender.lifeSteal != 0){
        let stolenLife = Math.floor((attacker.currentHealth)*defender.lifeSteal);
        attacker.currentHealth -= stolenLife;
        defender.currentHealth += stolenLife;

        if(defender.currentHealth > defender.maxHealth){
            defender.currentHealth = defender.maxHealth;
        
        textLog(`${defender.name} can't steal more from ${attacker.name} but cause ${stolenLife} damage to him.`)
        }else{
            textLog(`${defender.name} stole ${stolenLife} HP from ${attacker.name}.`)
        }
    }
    return attacker.currentHealth;
}
// Deux eventlistener pour mettre à jour les barres de vies et lancer le heal
document.getElementById("p1heal").addEventListener("click",() => {
    heal(p1[0],p2[0]);
    document.getElementById("hpp1").style.width = (p1[0].currentHealth/p1[0].maxHealth)*100 + "%";
    document.getElementById("hpp1").innerHTML = Math.floor((p1[0].currentHealth/p1[0].maxHealth)*100) + "%";
    document.getElementById("hpp2").style.width = (p2[0].currentHealth/p2[0].maxHealth)*100 + "%";
    document.getElementById("hpp2").innerHTML = Math.floor((p2[0].currentHealth/p2[0].maxHealth)*100) + "%";
    document.getElementById("fightbuttonp1").style.display = "none";
    document.getElementById("fightbuttonp2").style.display = "flex";
});
document.getElementById("p2heal").addEventListener("click",() => {
    heal(p2[0],p1[0]);
    document.getElementById("hpp1").style.width = (p1[0].currentHealth/p1[0].maxHealth)*100 + "%";
    document.getElementById("hpp1").innerHTML = Math.floor((p1[0].currentHealth/p1[0].maxHealth)*100) + "%";
    document.getElementById("hpp2").style.width = (p2[0].currentHealth/p2[0].maxHealth)*100 + "%";
    document.getElementById("hpp2").innerHTML = Math.floor((p2[0].currentHealth/p2[0].maxHealth)*100) + "%";
    document.getElementById("fightbuttonp1").style.display = "flex";
    document.getElementById("fightbuttonp2").style.display = "none";
});
document.getElementById("p1pass").addEventListener("click",() => {
vampireCheck(p1[0],p2[0])
    document.getElementById("hpp1").style.width = (p1[0].currentHealth/p1[0].maxHealth)*100 + "%";
    document.getElementById("hpp1").innerHTML = Math.floor((p1[0].currentHealth/p1[0].maxHealth)*100) + "%";
    document.getElementById("hpp2").style.width = (p2[0].currentHealth/p2[0].maxHealth)*100 + "%";
    document.getElementById("hpp2").innerHTML = Math.floor((p2[0].currentHealth/p2[0].maxHealth)*100) + "%";
    document.getElementById("fightbuttonp1").style.display = "none";
    document.getElementById("fightbuttonp2").style.display = "flex";
});
document.getElementById("p2pass").addEventListener("click",() => {
vampireCheck(p2[0],p1[0])
    document.getElementById("hpp1").style.width = (p1[0].currentHealth/p1[0].maxHealth)*100 + "%";
    document.getElementById("hpp1").innerHTML = Math.floor((p1[0].currentHealth/p1[0].maxHealth)*100) + "%";
    document.getElementById("hpp2").style.width = (p2[0].currentHealth/p2[0].maxHealth)*100 + "%";
    document.getElementById("hpp2").innerHTML = Math.floor((p2[0].currentHealth/p2[0].maxHealth)*100) + "%";
    document.getElementById("fightbuttonp1").style.display = "flex";
    document.getElementById("fightbuttonp2").style.display = "none";
});
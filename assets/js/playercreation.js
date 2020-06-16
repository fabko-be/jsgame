    const races = [
        {
    name: "human",
    maxHealth: 100,
    startHealth: 100,
    currentHealth: 100,
    maxDamage: 20,
    maxHealing: 30,
    damageTaken: 0.8,
    reflectChance: 0,
    lifeSteal: 0,
},
        {
    name: "orc",
    maxHealth: 140,
    startHealth: 140,
    currentHeal: 140,
    maxDamage: 20,
    maxHealing: 42,
    damageTaken: 1,
    reflectChance: 0,
    lifeSteal: 0,
},
        {
    name : "elf",
    maxHealth : 100,
	startHealth : 100,
    currentHeal : 100,
    maxDamage : 20,
	maxHealing : 30,
	damageTaken : 1,
	reflectChance : 0.3,
	lifeSteal : 0,
},
{
    name : "vamp",
    maxHealth : 100,
	startHealth : 100,
    currentHeal : 100,
    maxDamage : 20,
	maxHealing : 30,
	damageTaken : 1,
	reflectChance : 0,
	lifeSteal : 0.1,
}
]

p1 = [];
p2 = [];
itemp1 = [{
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}];
itemp2 = [{
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}];
let raceChosenp1;
let itemChosenp1;
let raceChosenp2;
let itemChosenp2;

// Début de la création du P1
document.getElementById("rhum1").addEventListener("click", () => {
    p1[0] = races[0] 
    raceChosenp1 = "Humain"
    document.getElementById("rhum1").style.transform = "scale(1.5)"
    document.getElementById("rorc1").style.transform = "scale(1)"
    document.getElementById("relf1").style.transform = "scale(1)"
    document.getElementById("rvamp1").style.transform = "scale(1)"
    
});
document.getElementById("rorc1").addEventListener("click", () => {
    p1[0] = races[1] 
    raceChosenp1 = "Orc"
    document.getElementById("rorc1").style.transform = "scale(1.5)"
    document.getElementById("rhum1").style.transform = "scale(1)"
    document.getElementById("relf1").style.transform = "scale(1)"
    document.getElementById("rvamp1").style.transform = "scale(1)"
});
document.getElementById("relf1").addEventListener("click", () => {
    p1[0] = races[2]
    raceChosenp1 = "Elf"
    document.getElementById("relf1").style.transform = "scale(1.5)"
    document.getElementById("rhum1").style.transform = "scale(1)"
    document.getElementById("rorc1").style.transform = "scale(1)"
    document.getElementById("rvamp1").style.transform = "scale(1)"
});
document.getElementById("rvamp1").addEventListener("click", () => {
    p1[0] = races[3] 
    raceChosenp1 = "Vampire"
    document.getElementById("rvamp1").style.transform = "scale(1.5)"
    document.getElementById("rhum1").style.transform = "scale(1)"
    document.getElementById("rorc1").style.transform = "scale(1)"
    document.getElementById("relf1").style.transform = "scale(1)"
});

document.getElementById("bootsp1").addEventListener("click", () => {
    itemp1.dodgeChance = 0.3
    itemp1.bonusHeal = 0
    itemp1.bonusDamage = 0
    itemp1.attackTwiceChance = 0
    itemChosenp1 = "boots";
    document.getElementById("bootsp1").style.transform = "scale(1.5)"
    document.getElementById("staffp1").style.transform = "scale(1)"
    document.getElementById("swordp1").style.transform = "scale(1)"
    document.getElementById("bowp1").style.transform = "scale(1)"
});
document.getElementById("staffp1").addEventListener("click", () => {
    itemp1.dodgeChance = 0
    itemp1.bonusHeal = 0.2
    itemp1.bonusDamage = 0
    itemp1.attackTwiceChance = 0
    itemChosenp1 = "Staff";
    document.getElementById("bootsp1").style.transform = "scale(1)"
    document.getElementById("staffp1").style.transform = "scale(1.5)"
    document.getElementById("swordp1").style.transform = "scale(1)"
    document.getElementById("bowp1").style.transform = "scale(1)"
});
document.getElementById("swordp1").addEventListener("click", () => {
    itemp1.dodgeChance = 0
    itemp1.bonusHeal = 0
    itemp1.bonusDamage = 0.3
    itemp1.attackTwiceChance = 0
    itemChosenp1 = "sword";
    document.getElementById("bootsp1").style.transform = "scale(1)"
    document.getElementById("staffp1").style.transform = "scale(1)"
    document.getElementById("swordp1").style.transform = "scale(1.5)"
    document.getElementById("bowp1").style.transform = "scale(1)"
});
document.getElementById("bowp1").addEventListener("click", () => {
    itemp1.dodgeChance = 0
    itemp1.bonusHeal = 0
    itemp1.bonusDamage = 0
    itemp1.attackTwiceChance = 0.3
    itemChosenp1 = "bow";
    document.getElementById("bootsp1").style.transform = "scale(1)"
    document.getElementById("staffp1").style.transform = "scale(1)"
    document.getElementById("swordp1").style.transform = "scale(1)"
    document.getElementById("bowp1").style.transform = "scale(1.5)"
});
// Fin de la création du P1

// Début création P2

document.getElementById("rhum2").addEventListener("click", () => {
    p2[0] = races[0] 
    raceChosenp2 = "Humain"
    document.getElementById("rhum2").style.transform = "scale(1.5)"
    document.getElementById("rorc2").style.transform = "scale(1)"
    document.getElementById("relf2").style.transform = "scale(1)"
    document.getElementById("rvamp2").style.transform = "scale(1)"
});
document.getElementById("rorc2").addEventListener("click", () => {
    p2[0] = races[1] 
    raceChosenp2 = "Orc"
    document.getElementById("rhum2").style.transform = "scale(1)"
    document.getElementById("rorc2").style.transform = "scale(1.5)"
    document.getElementById("relf2").style.transform = "scale(1)"
    document.getElementById("rvamp2").style.transform = "scale(1)"
});
document.getElementById("relf2").addEventListener("click", () => {
    p2[0] = races[2]
    raceChosenp2 = "Elf"
    document.getElementById("rhum2").style.transform = "scale(1)"
    document.getElementById("rorc2").style.transform = "scale(1)"
    document.getElementById("relf2").style.transform = "scale(1.5)"
    document.getElementById("rvamp2").style.transform = "scale(1)"
});
document.getElementById("rvamp2").addEventListener("click", () => {
    p2[0] = races[3] 
    raceChosenp2 = "Vampire"
    document.getElementById("rhum2").style.transform = "scale(1)"
    document.getElementById("rorc2").style.transform = "scale(1)"
    document.getElementById("relf2").style.transform = "scale(1)"
    document.getElementById("rvamp2").style.transform = "scale(1.5)"
});

document.getElementById("bootsp2").addEventListener("click", () => {
    itemp2.dodgeChance = 0.3
    itemp2.bonusHeal = 0
    itemp2.bonusDamage = 0
    itemp2.attackTwiceChance = 0
    itemChosenp2 = "boots";
    document.getElementById("bootsp2").style.transform = "scale(1.5)"
    document.getElementById("staffp2").style.transform = "scale(1)"
    document.getElementById("swordp2").style.transform = "scale(1)"
    document.getElementById("bowp2").style.transform = "scale(1)"
});
document.getElementById("staffp2").addEventListener("click", () => {
    itemp2.dodgeChance = 0
    itemp2.bonusHeal = 0.2
    itemp2.bonusDamage = 0
    itemp2.attackTwiceChance = 0
    itemChosenp2 = "Staff";
    document.getElementById("bootsp2").style.transform = "scale(1)"
    document.getElementById("staffp2").style.transform = "scale(1.5)"
    document.getElementById("swordp2").style.transform = "scale(1)"
    document.getElementById("bowp2").style.transform = "scale(1)"
});
document.getElementById("swordp2").addEventListener("click", () => {
    itemp2.dodgeChance = 0
    itemp2.bonusHeal = 0
    itemp2.bonusDamage = 0.3
    itemp2.attackTwiceChance = 0
    itemChosenp2 = "sword";
    document.getElementById("bootsp2").style.transform = "scale(1)"
    document.getElementById("staffp2").style.transform = "scale(1)"
    document.getElementById("swordp2").style.transform = "scale(1.5)"
    document.getElementById("bowp2").style.transform = "scale(1)"
});
document.getElementById("bowp2").addEventListener("click", () => {
    itemp2.dodgeChance = 0
    itemp2.bonusHeal = 0
    itemp2.bonusDamage = 0
    itemp2.attackTwiceChance = 0.3
    itemChosenp2 = "bow";
    document.getElementById("bootsp2").style.transform = "scale(1)"
    document.getElementById("staffp2").style.transform = "scale(1)"
    document.getElementById("swordp2").style.transform = "scale(1)"
    document.getElementById("bowp2").style.transform = "scale(1.5)"
});

// fin création P2

document.getElementById("start").addEventListener("click", () => {
    p1[0].name = (document.getElementById("p1name").value);
    p1.push(itemp1);
    p2[0].name = (document.getElementById("p2name").value);
    p2.push(itemp2)
    console.log(p1);
    console.log(p2);
    console.log(`Player 1 name is ${p1[0].name} and he is playing a ${raceChosenp1}. He choose the item : ${itemChosenp1}`);
    console.log(`Player 2 name is ${p2[0].name} and he is playing a ${raceChosenp2}. He choose the item : ${itemChosenp2}`);
});

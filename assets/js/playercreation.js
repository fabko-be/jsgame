    const races = [
        {
    name: "",
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
},
        {
    name:"",
    race: "orc",
    maxHealth: 140,
    startHealth: 140,
    currentHeal: 140,
    maxDamage: 20,
    maxHealing: 42,
    damageTaken: 1,
    reflectChance: 0,
    lifeSteal: 0,
    item:"",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
},
        {
    name :"",
    race : "elf",
    maxHealth : 100,
	startHealth : 100,
    currentHeal : 100,
    maxDamage : 20,
	maxHealing : 30,
	damageTaken : 1,
	reflectChance : 0.3,
    lifeSteal : 0,
    item:"",
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
    currentHeal : 100,
    maxDamage : 20,
	maxHealing : 30,
	damageTaken : 1,
	reflectChance : 0,
    lifeSteal : 0.1,
    item:"",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}
]

p1 = [];
p2 = [];

// Début de la création du P1
document.getElementById("rhum1").addEventListener("click", () => {
    p1[0] = races[0] 
    document.getElementById("rhum1").style.transform = "scale(1.5)"
    document.getElementById("rorc1").style.transform = "scale(1)"
    document.getElementById("relf1").style.transform = "scale(1)"
    document.getElementById("rvamp1").style.transform = "scale(1)"
    
});
document.getElementById("rorc1").addEventListener("click", () => {
    p1[0] = races[1] 
    document.getElementById("rorc1").style.transform = "scale(1.5)"
    document.getElementById("rhum1").style.transform = "scale(1)"
    document.getElementById("relf1").style.transform = "scale(1)"
    document.getElementById("rvamp1").style.transform = "scale(1)"
});
document.getElementById("relf1").addEventListener("click", () => {
    p1[0] = races[2]
    document.getElementById("relf1").style.transform = "scale(1.5)"
    document.getElementById("rhum1").style.transform = "scale(1)"
    document.getElementById("rorc1").style.transform = "scale(1)"
    document.getElementById("rvamp1").style.transform = "scale(1)"
});
document.getElementById("rvamp1").addEventListener("click", () => {
    p1[0] = races[3] 
    document.getElementById("rvamp1").style.transform = "scale(1.5)"
    document.getElementById("rhum1").style.transform = "scale(1)"
    document.getElementById("rorc1").style.transform = "scale(1)"
    document.getElementById("relf1").style.transform = "scale(1)"
});

document.getElementById("bootsp1").addEventListener("click", () => {
    p1[0].item = "boots";
    document.getElementById("bootsp1").style.transform = "scale(1.5)"
    document.getElementById("staffp1").style.transform = "scale(1)"
    document.getElementById("swordp1").style.transform = "scale(1)"
    document.getElementById("bowp1").style.transform = "scale(1)"
});
document.getElementById("staffp1").addEventListener("click", () => {
    p1[0].item = "staff";
    document.getElementById("bootsp1").style.transform = "scale(1)"
    document.getElementById("staffp1").style.transform = "scale(1.5)"
    document.getElementById("swordp1").style.transform = "scale(1)"
    document.getElementById("bowp1").style.transform = "scale(1)"
});
document.getElementById("swordp1").addEventListener("click", () => {
    p1[0].item = "sword";
    document.getElementById("bootsp1").style.transform = "scale(1)"
    document.getElementById("staffp1").style.transform = "scale(1)"
    document.getElementById("swordp1").style.transform = "scale(1.5)"
    document.getElementById("bowp1").style.transform = "scale(1)"
});
document.getElementById("bowp1").addEventListener("click", () => {
    p1[0].item = "bow";
    document.getElementById("bootsp1").style.transform = "scale(1)"
    document.getElementById("staffp1").style.transform = "scale(1)"
    document.getElementById("swordp1").style.transform = "scale(1)"
    document.getElementById("bowp1").style.transform = "scale(1.5)"
});
// Fin de la création du P1

// Début création P2

document.getElementById("rhum2").addEventListener("click", () => {
    p2[0] = races[0] 
    document.getElementById("rhum2").style.transform = "scale(1.5)"
    document.getElementById("rorc2").style.transform = "scale(1)"
    document.getElementById("relf2").style.transform = "scale(1)"
    document.getElementById("rvamp2").style.transform = "scale(1)"
});
document.getElementById("rorc2").addEventListener("click", () => {
    p2[0] = races[1] 
    document.getElementById("rhum2").style.transform = "scale(1)"
    document.getElementById("rorc2").style.transform = "scale(1.5)"
    document.getElementById("relf2").style.transform = "scale(1)"
    document.getElementById("rvamp2").style.transform = "scale(1)"
});
document.getElementById("relf2").addEventListener("click", () => {
    p2[0] = races[2]
    document.getElementById("rhum2").style.transform = "scale(1)"
    document.getElementById("rorc2").style.transform = "scale(1)"
    document.getElementById("relf2").style.transform = "scale(1.5)"
    document.getElementById("rvamp2").style.transform = "scale(1)"
});
document.getElementById("rvamp2").addEventListener("click", () => {
    p2[0] = races[3] 
    document.getElementById("rhum2").style.transform = "scale(1)"
    document.getElementById("rorc2").style.transform = "scale(1)"
    document.getElementById("relf2").style.transform = "scale(1)"
    document.getElementById("rvamp2").style.transform = "scale(1.5)"
});

document.getElementById("bootsp2").addEventListener("click", () => {
    p2[0].item = "boots";
    document.getElementById("bootsp2").style.transform = "scale(1.5)"
    document.getElementById("staffp2").style.transform = "scale(1)"
    document.getElementById("swordp2").style.transform = "scale(1)"
    document.getElementById("bowp2").style.transform = "scale(1)"
});
document.getElementById("staffp2").addEventListener("click", () => {
    p2[0].item = "staff";
    document.getElementById("bootsp2").style.transform = "scale(1)"
    document.getElementById("staffp2").style.transform = "scale(1.5)"
    document.getElementById("swordp2").style.transform = "scale(1)"
    document.getElementById("bowp2").style.transform = "scale(1)"
});
document.getElementById("swordp2").addEventListener("click", () => {
    p2[0].item = "sword";
    document.getElementById("bootsp2").style.transform = "scale(1)"
    document.getElementById("staffp2").style.transform = "scale(1)"
    document.getElementById("swordp2").style.transform = "scale(1.5)"
    document.getElementById("bowp2").style.transform = "scale(1)"
});
document.getElementById("bowp2").addEventListener("click", () => {
    p2[0].item = "bow";
    document.getElementById("bootsp2").style.transform = "scale(1)"
    document.getElementById("staffp2").style.transform = "scale(1)"
    document.getElementById("swordp2").style.transform = "scale(1)"
    document.getElementById("bowp2").style.transform = "scale(1.5)"
});

// fin création P2
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

function textLog(text){
    return document.getElementById("textlog").innerHTML += text + "<br>";
}
document.getElementById("start").addEventListener("click", () => {
    p1[0].name = (document.getElementById("p1name").value);
    p2[0].name = (document.getElementById("p2name").value);
    console.log(p1);
    console.log(p2);
    console.log(`Player 1 name is ${p1[0].name} and he is playing the race of ${p1[0].race} equiped with : ${p1[0].item}`);
    console.log(`Player 2 name is ${p2[0].name} and he is playing the race of ${p2[0].race}.equiped with : ${p2[0].item}`);
    // document.getElementById("textlog").innerHTML += `Player 1 name is ${p1[0].name} and he is playing the race of ${p1[0].race} equiped with : ${p1[0].item}. <br>`
    // document.getElementById("textlog").innerHTML += `Player 2 name is ${p2[0].name} and he is playing the race of ${p2[0].race}.equiped with : ${p2[0].item}. <br>`
    document.getElementById("cp1name").innerHTML = (p1[0].name);
    document.getElementById("cp2name").innerHTML = (p2[0].name);
    document.getElementById("fightscreen").style.display = "none";
    document.getElementById("combatlog").style.display = "block";
    textLog(`Player 1 name is ${p1[0].name} and he is playing the race of ${p1[0].race} equiped with : ${p1[0].item}.`);
    textLog(`Player 2 name is ${p2[0].name} and he is playing the race of ${p2[0].race}.equiped with : ${p2[0].item}.`)
    playerProfil()
    item(p1[0]);
    item(p2[0]);
});
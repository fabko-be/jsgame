// fetch("../../data/races/races.json")
//     .then((response) => response.json())
//     .then((data) =>
//         data.race.map((r) => {
//             Race(r);
//         })
//     );
// // 
// const Race = (attributes) => {
//     const {name, MaxHealth, currentHeal } = attributes;
// // 
//     console.log(name + currentHeal + "/"+ MaxHealth);
// }




let requestURL = '../../data/races/races.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
// 
    request.onload = function() {
    races = request.response;
    var racesArr = races;
    console.log(races)
    console.log(racesArr)
}
// console.log(racesArr)
// 
class Player {
    constructor(name) {
        this.name = name;
    }
}
// 
// let p1 = new Player(racesArr);
// 
// console.log(p1.name);
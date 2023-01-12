// var circleImg = '<img class="spc-circle" src="img/circle-draw.png" alt="Bolinhalinha">';
// var xImg = '<img class="spc-x" src="img/x-draw.png" alt="Xiszinhozinho">';

// let atualImg = document.getElementById('spc1').s

var name1 = document.getElementById("#name1");//h1
var name2 = document.getElementById("#name2");//h1

const input1 = document.querySelector("#input1")//input
const input2 = document.querySelector("#input2")//imput


function begin() {

  const playerId1 = input1.value;
  const playerId2 = input2.value;
  
  document.getElementById("home").style.display = "none";
  document.getElementById("game").style.display = "flex";

  console.log(name1 + " " + name2);

  name1.innerHTML = playerId1.value;
  name2.innerHTML = playerId2.value;
} 
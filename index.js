document.querySelector(".roll-button").onclick = function(){rollDice()};

var one = 0
var two = 0

function rollDice(){

  var winner;
  var imageOne;
  var imageTwo;
  var altOne;
  var altTwo;

  var diceNames = ["one", "two", "three", "four", "five", "six"];
  var rollOne = Math.floor(Math.random()*6) + 1; // both roll a random number from 1 to 6
  var rollTwo = Math.floor(Math.random()*6) + 1;

  for(var i = 1; i <= 6; i++){ // sets the image variables for the players accordingly
    if(rollOne == i){
      imageOne = "res/" + diceNames[i-1] + ".png";
      altOne = "dice roll of " + diceNames[i-1];
    }
    if(rollTwo == i){
      imageTwo ="res/" + diceNames[i-1] + ".png";
      altTwo = "dice roll of " + diceNames[i-1];
    }
  }

  if(rollOne > rollTwo){
    winner = 1;
    one++;
  }
  else if(rollOne < rollTwo){
    winner = 2;
    two++;
  }
  else{
    winner = -1;
  }


  updateImages(winner, imageOne, imageTwo, altOne, altTwo)

}

function updateImages(winner, imageAddressOne, imageAddressTwo, altOne, altTwo){
  if(winner < 0){
    document.querySelector("h1").innerHTML = "Tie";
  }
  else{
    document.querySelector("h1").innerHTML = "Player " + winner + " Wins";
  }


  document.querySelector(".dice-one").setAttribute("src", imageAddressOne);
  document.querySelector(".dice-two").setAttribute("src", imageAddressTwo);

  document.querySelector(".dice-one").setAttribute("alt", altOne);
  document.querySelector(".dice-two").setAttribute("alt", altTwo);

  document.querySelector(".counter-one").innerHTML = "Player One: " + one;
  document.querySelector(".counter-two").innerHTML = "Player Two: " + two;

}

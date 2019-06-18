// Keuze gebruiker
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

// Keuze computer
var choices = ["rock", "paper", "scissors"];
var randomNumber = Math.floor(Math.random() * choices.length);
var computerChoice = choices[randomNumber];

// Speelknop
var play = document.getElementById("play");
// Winnaarsboodschap
var winner = document.getElementById("winner");

// Gebruiker kiest steen door klik

rock.addEventListener("click", playRock);

function playRock() {
  var userChoice = "rock";
  console.log(userChoice);
  console.log(computerChoice);
  if (computerChoice === "rock") {
    winner.innerHTML = "Both of you are solid as a rock, no winners here.";
  } else if (computerChoice === "paper") {
    winner.innerHTML = "Computer's paper covers your rock, you lo-ho-se-her.";
  } else {
    winner.innerHTML =
      "You broke the computer's scissors. </br> Taste the back of your hand. That's what winner tastes like.";
  }
}

// Gebruiker kiest papier door klik

paper.addEventListener("click", playPaper);

function playPaper() {
  var userChoice = "paper";
  console.log(userChoice);
  console.log(computerChoice);
  if (computerChoice === "rock") {
    winner.innerHTML = "Your paper kicks the computer's rock ass, you winner!";
  } else if (computerChoice === "paper") {
    winner.innerHTML = "Two papers, two losers.";
  } else {
    winner.innerHTML =
      "You just got cut in half by the computer's scissors. You little wus.";
  }
}

// Gebruiker kiest schaar door klik

scissors.addEventListener("click", playScissors);

function playScissors() {
  var userChoice = "scissors";
  console.log(userChoice);
  console.log(computerChoice);
  if (computerChoice === "rock") {
    winner.innerHTML = "Computer's rock solid, you just got crushed my friend.";
  } else if (computerChoice === "paper") {
    winner.innerHTML = "You cut up the computer's paper, you gangsta.";
  } else {
    winner.innerHTML =
      "Scissor scissor on the wall, who is the biggest loser of them all? You both are because you both picked scissors.";
  }
}

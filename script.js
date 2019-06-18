console.log("hello");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var play = document.getElementById("play");
var winner = document.getElementById("winner");

//Keuze computer in variabele

var choices = ["rock", "paper", "scissors"];
var randomNumber = Math.floor(Math.random() * choices.length);
var computerChoice = choices[randomNumber];

function getComputerChoice() {
  return computerChoice;
}

//Keuze gebruiker in variabele

rock.addEventListener("click", getUserChoice() {
  var userChoice = "rock";
  return userChoice;
  });


paper.addEventListener("click", function() {
  var userChoice = "paper";
});
scissors.addEventListener("click", function() {
  var userChoice = "scissors";
});



//Variabele vergelijken met computerkeuze wanneer je op play klikt
//Resultaat geven in "winner" div

play.addEventListener("click", chooseWinner() {
  if (userChoise === computerChoice) {
    winner.innerHTML="It's a tie!";
  }
});



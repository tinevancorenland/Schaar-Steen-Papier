// Keuze gebruiker
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

// Keuze computer
var choices = ["rock", "paper", "scissors"];
var randomNumber = Math.floor(Math.random() * choices.length);
var computerChoice = choices[randomNumber];

// Winnaarsboodschap
var winner = document.getElementById("winner");
var randomChoice = document.getElementById("randomChoice");
var awareChoice = document.getElementById("awareChoice");

// Gebruiker kiest steen door klik

rock.addEventListener("click", playRock);

function playRock() {
  userChoice = "rock";
  awareChoice.innerHTML = "You're a rock";
  console.log(userChoice);
}

// Gebruiker kiest papier door klik

paper.addEventListener("click", playPaper);

function playPaper() {
  userChoice = "paper";
  awareChoice.innerHTML = "You're paper";
  console.log(userChoice);
}

// Gebruiker kiest schaar door klik

scissors.addEventListener("click", playScissors);

function playScissors() {
  userChoice = "scissors";
  awareChoice.innerHTML = "You're scissors";
  console.log(userChoice);
}

// Computer playt

play.addEventListener("click", playPlay);

function playPlay() {
  if (userChoice === "rock") {
    //Gebruiker koos steen in stap 1
    console.log(computerChoice);
    messageRock();
  } else if (userChoice === "paper") {
    //Gebruiker koos papier in stap 1
    console.log(computerChoice);
    messagePaper();
  } else {
    console.log(computerChoice);
    messageScissors(); //Gebruiker koos schaar in stap 1
  }
}

function messageRock() {
  if (computerChoice === "rock") {
    winner.innerHTML = "Both of us rock, but no winners here.";
    randomChoice.innerHTML = "I'm a rock";
  } else if (computerChoice === "paper") {
    winner.innerHTML = "I gave you a papercut and you started crying so I win";
    randomChoice.innerHTML = "I am paper";
  } else {
    winner.innerHTML =
      "Taste the back of your hand. That's what winner tastes like bro.";
    randomChoice.innerHTML = "I am scissors";
  }
}

function messagePaper() {
  if (computerChoice === "rock") {
    winner.innerHTML = "Your paper kicks my rock ass, you winner!";
    randomChoice.innerHTML = "Call me the rock.";
  } else if (computerChoice === "paper") {
    winner.innerHTML = "Two papers, two losers.";
    randomChoice.innerHTML = "I'm paper";
  } else {
    winner.innerHTML =
      "You just got cut in half by my scissors. You little wus.";
    randomChoice.innerHTML = "I choose scissors";
  }
}

function messageScissors() {
  if (computerChoice === "rock") {
    winner.innerHTML = "I am rock solid, you just got crushed my friend.";
    randomChoice.innerHTML = "I am rock";
  } else if (computerChoice === "paper") {
    winner.innerHTML = "You cut up my paper, you lil gangsta.";
    randomChoice.innerHTML = "I am paper";
  } else {
    winner.innerHTML =
      "Scissor scissor on the wall, who is the biggest loser of them all? We both are.";
    randomChoice.innerHTML = "I am scissors";
  }
}

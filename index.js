let player = {
  name: "Vaati",
  chips: 200
}
let cards = [];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0;
messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");
playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}


function startGame() {
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
   if (isAlive === true || hasBlackJack === false) {
     let card = randomCard();
     sum += card;
     cards.push(card);
     renderGame();
   }
}

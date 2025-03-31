
let player = {
    name: "Sagar",
    chips: 100
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function randomCard() {
  return Math.floor(Math.random() * 10) + 1;
}

function startGame() {
  isAlive = true;
  firstCard = randomCard();
  secondCard = randomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];

  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw another card?";
    isAlive = true;
    hasBlackJack = false;
  } else if (sum === 21) {
    message = "BlackJack!";
    isAlive = false;
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
    hasBlackJack = false;
  }

  messageEl.textContent = message;
  sumEl.textContent = "sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

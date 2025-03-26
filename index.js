let firstCard = 10;
let secondCard = 11;  
let sum = firstCard + secondCard;  
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
console.log(messageEl)

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw another card?"
        messageEl.textContent = message;
    } else if (sum === 21) {
        message = "BlackJack!"
        messageEl.textContent = message;
    } else {
        message = "You are out of the game!"
        messageEl.textContent = message;
    }

    
}



let firstCard = randomCard();
let secondCard = randomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById("round");
let sumId = document.getElementById("sum");
let cardsId = document.getElementById("Cards");
let playerId = document.getElementById("player");

let player = {
    name: "Player",
    chips: 145
}

playerId.textContent = player.name + ": $" + player.chips;

function money() {
    if (isAlive === true && hasBlackJack === false) {
        player.chips -= 10;
        playerId.textContent = player.name + ": $" + player.chips;
    } else if (sum > 21) {
        player.chips -= 50;
        playerId.textContent = player.name + ": $" + player.chips;
    }
    else if (sum === 21) {
        player.chips += 500;
        playerId.textContent = player.name + ": $" + player.chips;
    }
}

function startGame() {
    renderGame();
}

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
        return 10;
    } else {
        return randomNumber
    }
}

function renderGame() {

    cardsId.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsId.textContent += cards[i] + " | ";
    }   
    sumId.textContent = "Sum: " + sum;
    if (sum > 21) {
        
        message = "You're out of the game!";
        isAlive = false;

    } else if (sum === 21) {
        
        message = "Blackjack! You win!";
        hasBlackJack = true;
    } else if (sum < 21) {
        message = "Do you want to draw a new card?";
        isAlive = true;
    }
    money();
    messageEL.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomCard();
        sum += card;
        cards.push(card);
        renderGame();
    } else if (isAlive === false && hasBlackJack === false) {
        //clear the table and keep the chips
        cards = [];
        sum = 0;
        renderGame(); 
    }
}
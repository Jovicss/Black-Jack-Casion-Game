// Blackjack MiniGame Made By @Jovic#8370

let cards = []
let sum = 0
let blackJack = false
let isAlive = false
let message = ""
let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element") Two Types of Selectros (specify ID and QuerySelector)
let sumElement = document.querySelector("#sum-element")
let cardsElement = document.getElementById("cards-element")

let player = { // Only for test, I changed object with array, bc array is better for what I want to do :D 
    balance: "Balance",
    chips: 300
}

// For showing your balance you can use Object or Array (above you can see one example for Object type and below i used array type ) (Your Choice :D)

/// This is show your Balance, I will add funcion witch will remove or add money to your balance, depends is Alive = false (Remove Money ) and is blackJack = true (Add Money)

let playerBalance = "Balance: $"
let playerChips = 300
let infoPlayer = [playerBalance, playerChips]

let playerInfo = document.getElementById("player-info")
for (let x = 0; x < infoPlayer.length; x++) {
    playerInfo.textContent += infoPlayer[x]
}

function getRandomCard() {
    let randomNum = Math.floor( Math.random()*13 ) + 1 
    if (randomNum > 10 ) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function getRandomCash() {
    let randomMoney =  Math.floor( Math.random()*100 ) + 1
    return randomMoney
}

let  randomDeposit = getRandomCash()

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsElement.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }

    sumElement.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = "Do you want another card?" 
    } else if (sum === 21) {
        message = "You've got Blackjack!" 
        blackJack = true
    } else {
        message = "You're lose the game!" 
        isAlive = false
    }
    
    console.log(message)
    messageElement.innerText = message
}

function newCard() {
    if (isAlive === true && blackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
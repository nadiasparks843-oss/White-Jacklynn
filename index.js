let player={
  name:"Player",
  chips:100
}
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl=document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name + ": $"+ player.chips

let sum=0


function getRandomCard(){
let number= Math.floor(Math.random()*13)+1
  
  if (number===1){
    return 11
  }else if(number>10){
    return 10
  }else{
   return number
  }
}
 

function startGame() {
   isAlive= true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
   sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  cardEl.textContent = " Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You win!(✿◕‿◕✿)";
    hasBlackJack = true;
  } else {
    message = "You lost! Bye~Bye~ 〜(￣▽￣〜)";
    isAlive = false;
  }
  messageEl.textContent = message;
}

 
function NewCard() {
  console.log("Drawing a new card from the deck"); 
  if(isAlive===true && hasBlackJack===false){
  let newCard = getRandomCard();
  cards.push(newCard);
  sum+= newCard
  console.log(cards);
  renderGame();}
}





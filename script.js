//Extracts elements from the HTML document
var ourButton = document.getElementById("start");
var smallList = document.getElementById("smaller");
var largeList = document.getElementById("greater");
var newGame = document.getElementById("new");

//Event Listeners for Button Clicks
ourButton.addEventListener("click", game);
newGame.addEventListener("click", newgame);

//Generates a Random Number between 0 and 100
var randomNo = Math.floor(100 * Math.random());

//The Game Guess Function
function game(){
  var x = prompt("Enter Your guess!");
  if (x == randomNo){
     alert ("You guessed right. Right Answer is " + randomNo);
     location.reload();
     return;
   }
  else if (randomNo > x) {
    largeList.innerHTML += "<li>" + x + "</li>";
  }
  else if (randomNo < x ) {
    smallList.innerHTML += "<li>" + x + "</li>";
  }
}


//Start New Game Function basically refresh the page...but How?
function newgame(){
location.reload();
}
